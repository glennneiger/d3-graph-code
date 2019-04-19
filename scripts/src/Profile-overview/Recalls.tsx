import React, { Component } from 'react';
import { Tabs, Tab, Form,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BarChart, PieChart } from "react-d3-components";

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

let sort = null;

class Recalls extends Component {
	
	render() {
		return (
			
			<div className="recalls_div">
												<div className="clearfix recalls_header">
													<h3 className="pull-left">Recalls 2222</h3>
													<div className="pull-right data_range">
														<span>Data Range:</span>
														<select>
															<option>Last 5 years</option>
															<option>Last 10 years</option>
															<option>Last 11 years</option>
														</select>
													</div>
												</div>

												<div className="recalls_chart_div">
													<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
														<Tab eventKey="home" title={<img className="bargraph_sel" src={require("../images/icon-bargraph.png")} />}>
															<BarChart
																data={data2}
																width={800}
																height={200}
																margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
														</Tab>
														<Tab eventKey="profile" title={<img className="piegraph_sel" src={require("../images/icon-piegraph.png")} />}>
															<PieChart
																data={data3}
																width={600}
																height={400}
																outerRadius={100} 
																innerRadius={0.5}
																margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
																sort={sort}
															/>
														</Tab>

													</Tabs>

												</div>

												<div className="recalls_content">
													<div className="table-responsive">
														<Table className="table">
															<thead>
																<tr>
																	<th style={{ 'width': '12%' }}>Recall Date <i className="fa fa-angle-down"></i></th>
																	<th style={{ 'width': '12%', 'textAlign': 'center' }}>Recall Class</th>
																	<th style={{ 'width': '12%' }}>Root Cause</th>
																	<th>Reason</th>
																</tr>
															</thead>
															<tbody>
																<tr style={{ "borderColor": "#9adf55" }}>
																	<td>9/12/2017</td>
																	<td style={{ "textAlign": "center" }}>2</td>
																	<td>Device Design</td>
																	<td style={{ 'opacity': 0.6 }}>Boston Scientific has received reports of intermittent over-sensing of the Minute Ventilation (MV) sensor signal with certain Boston Scientific pacemaker and cardiac resynchronization… <Link to={'/'} style={{ "color": "#44c0d0", "fontWeight": 400 }}>More</Link></td>
																</tr>
																<tr style={{ "borderColor": "#6eb4ff" }}>
																	<td>10/6/2015</td>
																	<td style={{ "textAlign": "center" }}>2</td>
																	<td>Packaging</td>
																	<td style={{ "opacity": 0.6 }}>The use of Allura Xper, Allura Clarity, Allura CV, Allura Centron and UNIQ systems regarding live images and still images can lead to still images being interpreted as live Images.</td>
																</tr>
																<tr style={{ "borderColor": "#007aff" }}>
																	<td>9/22/2015</td>
																	<td style={{ "textAlign": "center" }}>2</td>
																	<td>Packaging Process Control</td>
																	<td style={{ "opacity": 0.6 }}>Extra monitors, so called 7th or 8th monitor, mounted on the Monitor Ceiling Suspension (MCS), might disengage from the MCS and fall down. The two small set screws securing the two… <Link to={'/'} style={{ "color": "#44c0d0", "fontWeight": 400 }}>More</Link></td>
																</tr>
															</tbody>
														</Table>
													</div>
												</div>
											</div>
			
		);
	}
}

export default Recalls; 