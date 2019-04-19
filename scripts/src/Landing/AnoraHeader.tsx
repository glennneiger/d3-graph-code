import React from "react";
import "./AnoraHeader.scss";
import { connect } from 'react-redux';
import { getProfile, checkLoginStatus, login, logout, signUp } from "../store/auth/actions";
import history from '../history';

const AnoraHeader = (props: IAccountHeaderProps) =>
    <nav className="anora-nav">
        <div className="col-md-2 offset-md-10 col-sm-2 offset-sm-10">
            {!props.loggedIn &&
                    // <button className="anora-nav-button" onClick={() => props.signUp()}>Sign In</button>
                    <button className="anora-nav-button" onClick={() => history.push('/auth')}>Sign In</button>
            }
            {props.loggedIn &&
                <button className="anora-nav-button" onClick={() => props.logout()}>Logout</button>
            }
        </div>
    </nav>;

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getProfile: () => dispatch(getProfile()),
    checkLoginStatus: () => dispatch(checkLoginStatus()),
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    signUp: () => dispatch(signUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(AnoraHeader);