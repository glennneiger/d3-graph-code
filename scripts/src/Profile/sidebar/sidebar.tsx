import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
class SideBar extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-4">
                <div className="profile-main-avatar">
                    <div className="profile-avatar-image">
                        <img src={require("../../images/avatar.png")} />
                    </div>

                    <div className="profile-avatar-content">
                        <h4>James Harrington</h4>
                        <h5>james@somecompany.com</h5>
                        <Link to={'/edit'}>Edit</Link>
                    </div>

                    <div className="profile-main-list">

                        <div className="sideMenu">

                            <NavLink to={"/profile/saves"} activeClassName="active">
                                <i className="fas fa-save" aria-hidden="true"></i>
                                My Saves
                            </NavLink>
                            <NavLink to={"/profile/password"} activeClassName="active">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                                Change Password
                            </NavLink>
                            <NavLink to={"/profile/billing"} activeClassName="active">
                                <i className="fa fa-credit-card" aria-hidden="true"></i>
                                Billing
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar; 
