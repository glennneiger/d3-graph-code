import auth0 from 'auth0-js';
import { push } from "react-router-redux";
import history from "../history";
import { Auth0Lock } from 'auth0-lock';
import { initial } from '../../../node_modules/@types/lodash-es';

const SUCCESS_URL = "/";
const ERROR_URL = "/";
const LOGOUT_URL = "/";

const domain = 'nova-approval.auth0.com';
const clientId = 'GNWX4TGm7KeiZwhEMF3tiZx0ahSWLCIs';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: domain,
    clientID: clientId,
    scope: "openid profile"
  });
  lock = null;
  lockOptions = {
    theme: {
      logo: "https://media.anora.ai/logo/anora-main-logo-vertical.png",
      primaryColor: "rgb(1,171,221)"
    },
    auth: {
      redirect: false,
      responseType: 'token',
      audience: "https://nova-search-api/"
    },
    autoclose: true,
    languageDictionary: {
      title: "Log in"
    }
  }
  userProfile;
  tokenRenewalTimeout;

  constructor() {
    try {
      let accessToken = this.getAccessToken();
      this.scheduleRenewal();
    }
    catch (e) {
      console.log("No access token found");
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(callback?, initialScreen = "login") {
    this.lock = new Auth0Lock(clientId, domain, { ...this.lockOptions, "initialScreen": initialScreen });
    this.lock.on("authenticated", (authResult) => {
      auth.setSession(authResult);
      if (callback) callback();
    }).show();
  }

  signUp(callback?) {
    return this.login(callback, "signUp");
  }

  logout(callback?) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    clearTimeout(this.tokenRenewalTimeout);
    if (callback) callback();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }


  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    // schedule a token renewal
    this.scheduleRenewal();
  }

  // Schedule renewal of Auth0 token whenever it expires.
  scheduleRenewal() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    let delay = expiresAt - Date.now();
    if (delay < 0) delay = 10;
    if (delay > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewToken();
      }, delay);
    }
  }

  // Renews Auth0 token when it expires.
  renewToken = () => new Promise((resolve, reject) => {
    // console.log("renewing token!");
    this.auth0.checkSession({ responseType: "token", redirectUri: window.location.href, audience: "https://nova-search-api/" }, (err, result) => {
      if (err) {
        // console.log("error renewing token", err);
        reject(err);
      } else {
        // console.log("success retrieving token", result);
        this.setSession(result);
        resolve(result);
      }
    }
    );
  })

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    if (new Date().getTime() < expiresAt) {
      return new Promise(resolve => resolve(true));
    }
    else if (!expiresAt) {
      // console.log("No expires at", localStorage);
      // User has been logged out.
      return new Promise(resolve => resolve(false));
    }
    else {
      return new Promise((resolve, reject) =>
        this.renewToken()
          .then((e) => resolve(true))
          .catch((e) => { console.error("fail", e); resolve(false) })
      );
    }
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No Access Token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    return this.auth0.client.userInfo(accessToken, cb);
  }

}

let auth = new Auth();
export default auth;