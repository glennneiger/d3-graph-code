/// <reference path="./auth.d.ts" />
import React from "react";
import { connect } from 'react-redux';
import "./AccountHeader.scss";
import {getProfile, checkLoginStatus, login, logout} from "../store/auth/actions";
import AccountDropdown from './AccountDropdown';
import SurveyModal from "../Survey/SurveyModal";

const mapStateToProps = state => ({
  ...state.auth
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProfile: () => dispatch(getProfile()),
  checkLoginStatus: () => dispatch(checkLoginStatus()),
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
});

class AccountHeader extends React.Component<IAccountHeaderProps, {}> {
  _surveyModal: SurveyModal = null;
  // todo: change the below handler
  handleAuthStateChange() {
    if (this.props.loggedIn && !this.props.profileData) {
      this.props.getProfile();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.loggedIn != this.props.loggedIn) {
      this.handleAuthStateChange();
    }
  }
  componentDidMount() {
    this.props.checkLoginStatus();
    this.handleAuthStateChange();
  }
	render() {
    const {profileData} = this.props;
    if (this.props.loggedIn) {
      return (
        // navbar-text float-right text-right
      <div className="navbar-text my-navbar">
        {/* <button className="btn btn-primary mt-2" onClick={() => this._surveyModal && this._surveyModal.show()}>Feedback</button> */}
        {
           profileData ? 
            <AccountDropdown 
              picture={profileData.picture} 
              name={profileData.name} 
              logout={this.props.logout} 
              surveyModel={this._surveyModal}
            /> :
            null
        }
        {/* <SurveyModal ref={modal => this._surveyModal = modal}/> */}
        <div className="caret"></div>
      </div>
      );
    }
    else {
      return (<div className="navbar-text float-right text-right">
        <button className="btn btn-primary mt-2" onClick={() => this._surveyModal && this._surveyModal.show()}>Feedback</button>
        <button className="ml-2 btn btn-primary mt-2" onClick={e => this.props.login()} >Login</button>
        <SurveyModal ref={modal => this._surveyModal = modal}/>
      </div>);
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountHeader);