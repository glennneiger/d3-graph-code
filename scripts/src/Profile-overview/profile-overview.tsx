import React, { Component } from 'react';
import { Tabs, Tab, Form,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BarChart, PieChart } from "react-d3-components";
import './profile-overview.scss';
import Recalls from './Recalls';
import Incidents from './Incidents';
let data = [
	{
		label: "SomethingA",
		values: [
			{ x: "<30 days", y: 3 },
			{ x: "30-90d", y: 5 },
			{ x: "90d-6mo", y: 3 },
			{ x: "6mo-1yr", y: 2 },
			{ x: "1-2years", y: 1 },
			{ x: ">2 year", y: 0 }
		]
	}
];

let data2 = [
	{
		label: 'somethingA',
		values: [{ x: '2015', y: 1 }, { x: '2016', y: 2 }, { x: '2017', y: 0 }, { x: '2018', y: 2 }, { x: '2019', y: 1 }]
	},
	{
		label: 'somethingB',
		values: [{ x: '2015', y: 2 }, { x: '2016', y: 1 }, { x: '2017', y: 2 }, { x: '2018', y: 1 }, { x: '2019', y: 0 }]
	},
	{
		label: 'somethingC',
		values: [{ x: '2015', y: 3 }, { x: '2016', y: 1 }, { x: '2017', y: 0 }, { x: '2018', y: 2 }, { x: '2019', y: 1 }]
	}

];
let data3 = {
	label: 'somethingA',
	values: [{ x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 }]
};
let data4 = {
	label: 'somethingA',
	values: [{ x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 }, { x: 'SomethingD', y: 1 }]
};
let data5 = [
	{
		label: "SomethingA",
		values: [
			{ x: "2015", y: 1 },
			{ x: "2016", y: 3 },
			{ x: "2017", y: 1 },
			{ x: "2018", y: 2 },
			{ x: "2019", y: 1 },
			
		]
	}
];
let sort = null;
var tooltipScatter = function (x, y) {
	return "x: " + x + " y: " + y;
};
const scale = value => { 
	// some color selection
	return '#ddd';
};
class ProfileOverview extends Component {
	
	render() {
		return (
			<div>
				<section className="programmer_pacemaker">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="back_search">
									<Link to={'/'}><i className="fa fa-angle-left"></i> Back to Search Results</Link>
								</div>
								<div className="programmer_header">
									<div className="row">
										<div className="col-md-6">
											<h2>K871986  Model 5600B Programmer, Pacemaker</h2>
										</div>
										<div className="col-md-6">
											<ul className="list-inline text-right program_uline">
												<li className="save_li"><Link to={'/'}><img src={require("../images/icon-save.png")} /> Save This</Link></li>
												<li className="share_li"><Link to={'/'}><img src={require("../images/icon-share.png")} /> Share</Link></li>

											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="programmer_tabs">
					<div className="container">
						<Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
							<Tab eventKey="overview" title="Overview">
								<div className="row">
									<div className="col-md-3">
										<div className="overview_grid">
											<div className="overview_heading">
												<h3>Applicant</h3>
											</div>
											<div className="overview_content">
												<img className="telelectronics_logo" src={require("../images/telelectronics_logo.png")} />
												<ul className="over_uline">
													<li>
														<h4>TELECTRONICS, INC.
												<br></br>40 CRANE HILL RD.
												<br></br>suffield,  CT  06078
											</h4>
													</li>
													<li>
														<h5>Applicant Contact</h5>
														<p>William C Nealon</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="overview_grid">
											<div className="overview_heading">
												<h3 style={{ "color": "#ff9500" }}>Application Details</h3>
											</div>
											<div className="overview_content">
												<div className="row">
													<div className="col-md-6">
														<ul className="over_uline">
															<li>
																<h5>Regulation / Code</h5>
																<p>870.3700 Pacemaker programmers</p>
																<div className="regultion_arrow_content">
																	<div className="contain-list">
																		<p><Link to={'/'}>KRG</Link> </p>
																		<ul></ul>
																	</div>
																</div>
															</li>
															<li>
																<h5>Classification</h5>
																<p>Class III</p>
															</li>
															<li>
																<h5>Clearance Type</h5>
																<p>Traditional</p>
															</li>
														</ul>
													</div>
													<div className="col-md-6">
														<div className="row">
															<div className="col-md-6">
																<ul className="over_uline over_uline_m25">
																	<li>
																		<h5>Submission Date</h5>
																		<p>05-25-1987</p>
																	</li>
																</ul>
															</div>
															<div className="col-md-6">
																<ul className="over_uline over_uline_m25">
																	<li>
																		<h5>Decision Date</h5>
																		<p>06-24-1987</p>
																	</li>
																</ul>
															</div>
														</div>
														<ul className="over_uline">
															<li>
																<h5>Review Panel</h5>
																<p>Cardiovascular</p>
															</li>
															<li>
																<h5>Decision</h5>
																<p>Substantially Equivalent (SESE)</p>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-3">
										<div className="overview_grid">
											<div className="overview_heading">
												<h3 style={{ "color": "#8bcc31" }}>FDA Contacts</h3>
											</div>
											<div className="overview_content">
												<ul className="over_uline">
													<li>
														<h5>Division of cardiovascular devices</h5>
														<p>Bram D. Zuckerman, M.D.<br />301-796-7000</p>
													</li>
													<li>
														<h5>Cardiac Electrophysiology Devices Branch</h5>
														<p>Mark Fellman
                                            <br></br>Mark.Fellman@fda.hhs.gov
											<br></br>	301-796-5630
										    </p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-3">
										<div className="estimate_cost_div">
											<h3>Estimated Cost</h3>
											<div className="price_cost">$42k</div>
										</div>
									</div>
									<div className="col-md-9">
										<div className="overview_chart_main clearfix">
											<div className="review_time_div">
												<h3>Review Time</h3>
												<div className="price_cost">29</div>
												<p>days</p>
											</div>
											<div className="review_chart">
												<div className="chart_tagline">
													<p><span className="fast_tag">Fast</span> Faster than <span>57</span> of <span>58</span> applications under product code <Link to={'/'}>KRG</Link></p>
												</div>
												<BarChart
													data={data}
													width={500}
													height={200}
													tooltipHtml={tooltipScatter}
													colorScale={scale}
													colorByLabel={false}
													margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
												/>
											</div>
										</div>
									</div>
								</div>
							</Tab>
							<Tab eventKey="explorer" title="Anora Explorer®">
								Anora Explorer®
            </Tab>
							<Tab eventKey="supply-chain" title="Supply Chain">
								<img src={require("../images/map_supply_chain.jpg")} />
							</Tab>
							<Tab eventKey="incidents" title="Incidents & Recalls">
								<div>
									<div className="row">
										<div className="col-md-12">
											
											<Recalls/>
											<Incidents/>
										</div>
									</div>
								</div>
							</Tab>
						</Tabs>
					</div>
				</section>

			</div>
		);
	}
}

export default ProfileOverview; 