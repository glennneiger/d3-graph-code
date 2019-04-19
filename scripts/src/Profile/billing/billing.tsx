import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './billing.scss';
class Billing extends Component {
    render() {
        return (
            <div className="col-md-9 col-sm-8 col-xs-12  top-tabs comment-tabs">
            <div className="billing_contnet_main">
            <h2>Billing</h2>
                            <div className="billing_content">

                            	<div className="billing_grid">
                            		<div className="row">
	                            		<div className="col-md-2 col-sm-3 col-xs-12 biling_left_side_col" >
	                            			<h4>Current Plan</h4>
	                            		</div>
	                            		<div className="col-md-10 col-sm-9 col-xs-12 biling_right_side_col">
	                            			<div className="plan_content">
	                            				<div className="row">
	                            					<div className="col-md-6 col-sm-6 col-xs-6 col-6">
	                            						<div className="trail_headline">
	                            							<p>30 Day Trial - Pro</p>
	                            						</div>
	                            					</div>
	                            					<div className="col-md-6 col-sm-6 col-xs-6 col-6">
	                            						<div className="trail_expire_date text-right">
	                            							<span>Expires 6/23/19</span>
	                            						</div>
	                            					</div>
	                            				</div>
	                            				<div className="plan_description">
	                            					<div className="row">
	                            						<div className="col-lg-9 col-md-8 col-sm-8">
	                            							<div className="plan_p">
	                            								<p>Go Pro and get unlimited access to all our data sources and search results. Save your searches and even specific codes and applications for later reference.</p>
	                            							</div>
	                            						</div>
	                            						<div className="col-lg-3 col-md-4 col-sm-4">
	                            							<ul className="list-inline plan_uline">
	                            								<li><Link to={'/'}>Upgrade</Link></li>
	                            								<li>$49/mo</li>
	                            							</ul>
	                            						</div>
	                            					</div>
	                            				</div>
	                            			</div>
	                            		</div>
	                            	</div>
                            	</div>

                            	<div className="billing_grid">
                            		<div className="row">
	                            		<div className="col-md-2 col-sm-3 biling_left_side_col">
	                            			<h4>Payment</h4>
	                            		</div>
	                            		<div className="col-md-10 col-sm-9 biling_right_side_col">
	                            			<div className="row">
	                            				<div className="col-md-8 col-sm-9 col-8">
	                            					<ul className="list-inline pull-left visa_uline">
	                            						<li> 
                                                        <img src={require("../../images/visa_icon.png")} />
                                                        Visa ending in 3454</li>
	                            						<li>10/23</li>
	                            					</ul>
	                            				</div>
	                            				<div className="col-md-4 col-sm-3 text-right col-4">
	                            					<Link to={'/'} className="biling_change_link">Change</Link>
	                            				</div>
	                            			</div>
	                            		</div>
	                            	</div>
                            	</div>

                            	<div className="billing_grid">
                            		<div className="row">
	                            		<div className="col-md-2 col-sm-3 biling_left_side_col">
	                            			<h4>History</h4>
	                            		</div>
	                            		<div className="col-md-10 col-sm-9 biling_right_side_col">
	                            			<div className="table-responsive history_table">          
											  
                                              <Table >
                                              <thead>
											      <tr>
											        <th style={{"paddingLeft": "0"}}>DATE</th>
											        <th>PLAN</th>
											        <th>AMOUNT</th>
											        <th></th>
											      </tr>
											    </thead>
											    <tbody>
											      <tr>
											        <td style={{"paddingLeft": "0"}}>March 12, 2019</td>
											        <td>Team</td>
											        <td>$79</td>
											        <td className="text-right"><Link  to={'/'} className="view_pdf_link">View PDF</Link></td>
											      </tr>
											      <tr>
											        <td style={{"paddingLeft": "0"}}>February 12, 2019</td>
											        <td>Team</td>
											        <td>$79</td>
											        <td className="text-right"><Link  to={'/'} className="view_pdf_link">View PDF</Link></td>
											      </tr>
											      <tr>
											        <td style={{"paddingLeft": "0"}}>January 12, 2019</td>
											        <td>Team</td>
											        <td>$79</td>
											        <td className="text-right"><Link  to={'/'} className="view_pdf_link">View PDF</Link></td>
											      </tr>
											      <tr>
											        <td style={{"paddingLeft": "0"}}>Dec 11, 2018</td>
											        <td>Pro</td>
											        <td>$25</td>
											        <td className="text-right"><Link  to={'/'} className="view_pdf_link">View PDF</Link></td>
											      </tr>
											      <tr>
											        <td style={{"paddingLeft": "0"}}>November 11, 2018</td>
											        <td>Pro</td>
											        <td>$25</td>
											        <td className="text-right"><Link  to={'/'} className="view_pdf_link">View PDF</Link></td>
											      </tr>
											      <tr>
											        <td style={{"paddingLeft": "0"}}>October 11, 2018</td>
											        <td>Pro</td>
											        <td>$25</td>
											        <td className="text-right"><Link  to={'/'} className="view_pdf_link">View PDF</Link></td>
											      </tr>
											    </tbody>
</Table>
                                              
											</div>
	                            		</div>
	                            	</div>
                            	</div>
                            </div>
            </div>
            </div>
        );
    }
}

export default Billing; 