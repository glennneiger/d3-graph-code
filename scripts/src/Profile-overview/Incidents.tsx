import React, { Component } from 'react';
import { Tabs, Tab, Form,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BarChart, PieChart } from "react-d3-components";

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
class Incidents extends Component {
	
	render() {
		return (
			<div>
				<div className="recalls_div incidents_div">
												<div className="clearfix recalls_header">
													<h3 className="pull-left">INCIDENTS</h3>
													<div className="pull-right data_range">
														<span>Data Range:</span>
														<select>
															<option>Last 5 years</option>
															<option>Last 10 years</option>
															<option>Last 11 years</option>
														</select>
													</div>
												</div>
												<div className="incident_pie_chart clearfix">
													<div className="in_pie_left">
														<h4>Who was operating the device at time of the event?</h4>
														<PieChart
																data={data4}
																width={600}
																height={400}
																outerRadius={100} 
																innerRadius={0.5}
																margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
																sort={sort}
															/>
													</div>
													<div className="in_pie_right">
														<h4>Was an adverse patient outcome involved?</h4>
														<PieChart
																data={data3}
																width={600}
																height={400}
																outerRadius={100} 
																innerRadius={0.5}
																margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
																sort={sort}
															/>
													</div>
												</div>
												<div className="incident_chart">
													{/* <img src={require("../images/c1.png")} /> */}
													<BarChart
																groupedBars
																data={data5}
																width={700}
																height={300}
																margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
												</div>
												<div className="recalls_content">
													<div className="table-responsive">
														<Table className="table">
															<thead>
																<tr>
																	<th style={{ "width": "12%" }}>Event Date <i className="fa fa-angle-down"></i></th>
																	<th style={{ "width": "12%", "textAlign": "center" }}>Type</th>
																	<th style={{ "width": "20%" }}>Device Problems</th>
																	<th>Description</th>
																</tr>
															</thead>
															<tbody>
																<tr style={{ "borderColor": "#5856d6" }}>
																	<td>9/12/2018</td>
																	<td style={{ "textAlign": "center" }}>Malfunction</td>
																	<td>Fracture; High impedance; High Capture Threshold</td>
																	<td style={{ "opacity": 0.6 }}>It was reported that high thresholds and high impedance were noted on the right ventricular (rv) lead. There was a suspected lead fracture. The lead was explanted and replaced. No… <Link to={'/'} style={{ "color": "#44c0d0", "fontWeight": 400 }}>More</Link></td>
																</tr>
																<tr style={{ "borderColor": "#5856d6" }}>
																	<td>10/6/2017</td>
																	<td style={{ "textAlign": "center" }}>Malfunction</td>
																	<td>Intermittent Capture; Under-Sensing ; Decreased Sensitivity</td>
																	<td style={{ "opacity": 0.6 }}>It was reported that there was an under-sensed premature ventricular contraction (pvc) noted on the presenting electrograms (egm). It was also reported there were small r waves me… <Link to={'/'} style={{ "color": "#44c0d0", "fontWeight": 400 }}>More</Link></td>
																</tr>
																<tr style={{ "borderColor": "#ff9500" }}>
																	<td>9/22/2016</td>
																	<td style={{ "textAlign": "center" }}>Injury</td>
																	<td>High Capture Threshold</td>
																	<td style={{ "opacity": 0.6 }}>It was reported that high thresholds were noted on the right atrial (ra) and right ventricular (rv) leads. Both leads were removed and replaced with a leadless implantable pulse gene… <Link to={'/'} style={{ "color": "#44c0d0", "fontWeight": 400 }}>More</Link></td>
																</tr>
															</tbody>
														</Table>
													</div>
												</div>
											</div>
			</div>
		);
	}
}

export default Incidents; 