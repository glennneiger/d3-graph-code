import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import MySave from './mySaves/mySaves';
import SideBar from './sidebar/sidebar';
import MySave from './mySaves/mySaves';
import Billing from './billing/billing';
import ChangePassword from './change-password/change-password';

class Profile extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <section id="profile-main">
                            <div className="container">
                                <div className="row">
                                    <SideBar />
                                    <Switch>
                                        <Redirect exact from="/profile" to="/profile/saves" />
                                        <Route exact path="/profile/saves" component={MySave} />
                                        <Route  path="/profile/billing" component={Billing} />
                                        <Route path="/profile/password" component={ChangePassword} />
                                    </Switch>
                                </div>
                            </div>
                        </section>

                    </div>
                </Router>
            </div>
        );
    }
}

export default Profile; 