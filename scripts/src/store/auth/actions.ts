/// <reference path="../../Accounts/auth.d.ts" />
import fetch from "cross-fetch";
import { Auth0Lock } from 'auth0-lock';
import auth from "../../Accounts/Auth";

declare const ENDPOINT_URL: string;

export const loggedIn = () => ({
  type: 'LOGIN_SUCCESS',
});

export const loggedOut = () => ({
  type: 'LOGOUT_SUCCESS'
});
export const renderProfile = (profileData) => ({
  type: 'RENDER_PROFILE',
  profileData
})
export function login() {
  return dispatch => {
    // lock.show();
    auth.login(() => dispatch(loggedIn()));
  }
}
export function signUp() {
  return dispatch => {
    // lock.show();
    auth.signUp(() => dispatch(loggedIn()));
  }
}
export function logout() {
  return dispatch => {
    console.log("logout called");
    auth.logout(() => dispatch(loggedOut()));
  }
}
export function getProfile() {
  return dispatch => {
    auth.getProfile((err, profileData: IProfileData) => {
      dispatch(renderProfile(profileData));
    });
  }
}
export function checkLoginStatus() {
  return dispatch =>
    auth.isAuthenticated().then(isAuth => {
      dispatch((isAuth ? loggedIn: loggedOut)());
      return isAuth;
    });
}