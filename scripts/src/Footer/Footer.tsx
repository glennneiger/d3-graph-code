import React, { Component } from 'react';
import './Footer.scss';
class Footer extends Component {
    render() {
        return (
            <section id="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <div className="footer-copyright">
                        <img src={require("../images/foot-logo.png")} alt="Nova Approval Home"/>
                        <p>© Anora 2019. All Rights Reserved.</p>
                    </div>
                </div>
                
                <div className="offset-md-1 col-md-8 col-sm-9">
                    <div className="footer-links">
                        <ul className="list-inline">
                            <li><a href="#">Help Center</a></li>
                            <li><a target="_blank" href="https://angel.co/anora-1">Jobs</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li>•</li>
                            <li><a href="#">Curated from US FDA Database</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}

export default Footer; 