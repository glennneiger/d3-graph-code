import React from 'react';
import Plot from 'react-plotly.js';
import { Tabs, Tab } from "src/Details/Tabs/Tabs";
import ListTable from "src/Details/Table/ListTable/ListTable";
import {groupBy, orderBy, sortBy, mergeWith, keys, values, union, toSafeInteger, max} from "lodash-es";

var VIS_COLORS = ["#111EC6", "#6495ED", "3FE0D0", "#004D92", "95C8D8", "008081", "4C516D", "#4F97A3", "1034A6", "008ECC"];

// lengthens the color array to match the number of categories displayed
function lengthenColors(colorArray, desiredLength) {
  while(desiredLength > colorArray.length) {
    let extraLength = desiredLength - colorArray.length;
    if (extraLength <= colorArray.length) {
      colorArray = colorArray.concat(colorArray.slice(0,extraLength));
    } else {
      colorArray = colorArray.concat(colorArray);
    }
  }
  return colorArray;
}

function AdverseData(props: {label: string, results: any}) {

  var results = props.results;
  var rowResults = results.items;
  var filteredRowResults = rowResults;
  var aggregateAdverseFlag = results.aggregate.adverse_event_flag.groups;
  //var aggregateDeviceOperator = results.aggregate.device_operator.groups;
  var eventYearCountGroups = results.aggregate["event_type|year"].groups;
  console.log(eventYearCountGroups);

  // numEvents variable to display event count to user at top of tab
  var numEvents = 0;
  for (key in aggregateAdverseFlag) {
    numEvents += aggregateAdverseFlag[key];
  }

  // stand in object until API is fixed
  var aggregateDeviceOperator = {
    "HEALTH PROFESSIONAL": 412,
    "PHYSICIAN": 71,
    "I": 40,
    "O": 35
  }

  // splitting event type | year aggregation
  var eventYearCountPoints = {};
  for (var key in eventYearCountGroups) {
    let split = key.split("|");
    let eventKey = split[0];
    let yearKey = split[1];
    if (!(eventKey in eventYearCountPoints)) {
      eventYearCountPoints[eventKey] = {};
    }
    eventYearCountPoints[eventKey][yearKey] = eventYearCountGroups[key];
  }

  // lengthen color array
  var colorNum = Math.max(Object.keys(aggregateAdverseFlag).length,
                          Object.keys(aggregateDeviceOperator).length,
                          Object.keys(eventYearCountPoints).length);
  VIS_COLORS = lengthenColors(VIS_COLORS, colorNum);

  // turn aggregate bar data into individual traces
  var eventYearCountTraces = [];
  var colorIndex = 0;
  for (var eventKey in eventYearCountPoints) {
    let tempTrace = {
      name: eventKey,
      hoverinfo: "name+x+y",
      type: "bar",
      marker: {
        color: VIS_COLORS[colorIndex]
      },
      x: keys(eventYearCountPoints[eventKey]),
      y: values(eventYearCountPoints[eventKey])
    }
    colorIndex += 1;
    eventYearCountTraces.push(tempTrace);
  }
  eventYearCountTraces = orderBy(eventYearCountTraces, e => e.y.reduce((a, b) => a + b, 0), 'desc');

  // front end label replacement - should be replaced with backend label replacement at some point
  // adverse
  var adverseKeyMap = {
    "": "Unknown",
    "Y": "Yes",
    "N": "No"
  }
  var reverseAdverseKeyMap = {
    "Unknown": "",
    "Yes": "Y",
    "No": "N"
  }
  for (var key in adverseKeyMap) {
    if (key in aggregateAdverseFlag) {
      let newKey = adverseKeyMap[key];
      Object.defineProperty(aggregateAdverseFlag, newKey,
        Object.getOwnPropertyDescriptor(aggregateAdverseFlag, key));
      delete aggregateAdverseFlag[key];
    }
  }
  // device operator
  var operatorKeyMap = {
    "HEALTH PROFESSIONAL": "Health Prof.",
    "O": "Other",
    "": "No Information",
    "U": "Unknown",
    "I": "Invalid Data"
  }
  for (var key in operatorKeyMap) {
    if (key in aggregateDeviceOperator) {
      let newKey = operatorKeyMap[key];
      Object.defineProperty(aggregateDeviceOperator, newKey,
        Object.getOwnPropertyDescriptor(aggregateDeviceOperator, key));
      delete aggregateDeviceOperator[key];
    }
  }

  function pieClickHandler(e) {
    if (e.curveNumber == 1) {
    } else {
      let filterLabel = reverseAdverseKeyMap[e.label];
      filteredRowResults = rowResults.filter(e => e.adverse_event_flag == filterLabel);
    }
  }

  var pieData = [];
  
  var pieAdverseFlag = {
    values: values(aggregateAdverseFlag),
    labels: keys(aggregateAdverseFlag),
    showlegend: false,
    type: 'pie',
    textinfo: 'label',
    domain: {
      x: [0, 0.5],
      y: [0, .9]
    },
    marker: {
      colors: VIS_COLORS
    },
    xaxis: 'x',
    yaxis: 'y',
    textposition: 'outside'
  }

  pieData.push(pieAdverseFlag);

  var pieDeviceOperator = {
    values: values(aggregateDeviceOperator),
    labels: keys(aggregateDeviceOperator),
    name: "",
    showlegend: false,
    type: 'pie',
    textinfo: 'label',
    domain: {
      x: [0.5, 1],
      y: [0, .9]
    },
    marker: {
      colors: VIS_COLORS
    },
    xaxis: 'x2',
    yaxis: 'y2',
    textposition: 'outside'
  }

  pieData.push(pieDeviceOperator);

  const pieDataVis = {
    layout: {
      margin: {
        l: 0,
        r: 50,
        b: 50,
        t: 70
      },
      yaxis2: {anchor: 'x2'},
      xaxis: {domain: [0, 0.5]},
      xaxis2: {domain: [0.5, 1]},
      annotations: [{
        xref: 'paper',
        yref: 'paper',
        x: 0.25,
        xanchor: 'center',
        y: 1,
        font: {
          family: "Arial",
          size: 16,
        },
        yanchor: 'bottom',
        text: 'Was an adverse<br>patient outcome involved?',
        showarrow: false
      },
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.75,
        xanchor: 'center',
        y: 1,
        font: {
          family: "Arial",
          size: 16,
        },
        yanchor: 'bottom',
        text: 'Who was operating<br>the device at time of event?',
        showarrow: false
      }],
      hovermode: "closest",
      width: 650,
      height: 400
    },
    //useResizeHandler: true,
    //style: {width: "100%", height: "460px"},
    data: pieData,
    onClick: e => pieClickHandler(e.points[0])
  }

  const barDataVis = {
    layout: {
      margin: {
        l: 50,
        r: 0,
        b: 50,
        t: 70
      },
      annotations: [{
        xref: 'paper',
        yref: 'paper',
        x: 0,
        xanchor: 'left',
        y: 1.1,
        font: {
          family: "Arial",
          size: 20,
        },
        yanchor: 'bottom',
        text: 'Volume by Type of Event',
        showarrow: false
      }],
      legend: {
        x: 0.8,
        y: 0.9
      },
      showlegend: true,
      hovermode: "closest",
      width: 650,
      barmode: "group"
    },
    useResizeHandler: true,
    style: {width: "100%", height: "460px"},
    data: eventYearCountTraces
  }

  return(<Tab label={props.label}>
      <div className="col-12 outbox">
        <h3 id="test">Adverse Events</h3>
        {numEvents} adverse events have occured under this product code (sourced directly from the <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfmaude/search.cfm">MAUDE Database.</a>)<br /><br />
        <div className="col-12 col-md-6 inbox">
          <Plot {...pieDataVis} />
          <Plot {...barDataVis} />
        </div>
        <div className="col-12">
          <ListTable
            data={filteredRowResults}
            headers={Object.keys(filteredRowResults[0])} />
        </div>
      </div>
    </Tab>);
}

export default AdverseData;