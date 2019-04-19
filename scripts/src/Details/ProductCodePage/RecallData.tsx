import React from 'react';
import Plot from 'react-plotly.js';
import { Tabs, Tab } from "src/Details/Tabs/Tabs";
import ListTable from "src/Details/Table/ListTable/ListTable";
import {groupBy, orderBy, sortBy, mergeWith, keys, values, union, toSafeInteger} from "lodash-es";

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

function bufferYears(typeObject) {
  let soloYear = parseInt(Object.keys(typeObject)[0]);
  typeObject[soloYear + 2] = 0;
  typeObject[soloYear - 2] = 0;
  return typeObject;
}

function RecallData(props: {label: string, results: any}) {
  
  var results = props.results;
  
  var aggregateCause = results.aggregate.root_cause_description.groups;
  var causeYearCountGroups = results.aggregate["root_cause_description|year"].groups;


  var numRecalls = results.items.length;

  var titlePosX = 0;
  var titlePosY = 1.1;
  var titleFontSize = 16;

  VIS_COLORS = lengthenColors(VIS_COLORS, Object.keys(aggregateCause).length);

  var causeYearCountPoints = {};

  for (var key in causeYearCountGroups) {
    let split = key.split("|");
    let causeKey = split[0];
    let yearKey = split[1];
    if (yearKey !== "") {
      if (!(causeKey in causeYearCountPoints)) {
        causeYearCountPoints[causeKey] = {};
      }
      causeYearCountPoints[causeKey][yearKey] = causeYearCountGroups[key];
    }
  }

  var yearKeyMap = {
    "": "No Termination Date"
  }
  var causeKeyMap = {
    "": "No Information"
  }

  for (var causeKey in causeYearCountPoints) {
    if (causeKey in causeKeyMap) {
      let newCauseKey = causeKeyMap[causeKey];
      Object.defineProperty(causeYearCountPoints, newCauseKey,
        Object.getOwnPropertyDescriptor(causeYearCountPoints, causeKey));
      delete causeYearCountPoints[causeKey];
    }
    if (Object.keys(causeYearCountPoints[causeKey]).length == 1) {
      causeYearCountPoints[causeKey] = bufferYears(causeYearCountPoints[causeKey]);
    }
  }


  var barData = []; 

  var colorIndex = 0;
  for (var causeKey in causeYearCountPoints) {
    let tempTrace = {
      name: causeKey,
      hoverinfo: "name+x+y",
      type: "bar",
      marker: {
        color: VIS_COLORS[colorIndex]
      },
      x: keys(causeYearCountPoints[causeKey]),
      y: values(causeYearCountPoints[causeKey])
    }
    colorIndex += 1;
    barData.push(tempTrace);
  }
  //allData = orderBy(allData, e => e.y.reduce((a, b) => a + b, 0), 'asc');


  // front end label replacement - should be replaced with backend label replacement at some point
  for (var key in causeKeyMap) {
    if (key in aggregateCause) {
      let newKey = causeKeyMap[key];
      Object.defineProperty(aggregateCause, newKey,
        Object.getOwnPropertyDescriptor(aggregateCause, key));
      delete aggregateCause[key];
    }
  }

  var pieData = [{
    values: values(aggregateCause),
    labels: keys(aggregateCause),
    //legendgroup: "group 1",
    showlegend: false,
    type: 'pie',
    textinfo: 'label',
    textposition: 'outside',
    marker: {
      colors: VIS_COLORS
    }
  }]

  const pieDataVis = {
    layout: {
      width: 700,
      margin: {
        l: 100,
        r: 100,
        b: 30,
        t: 100
      },
      annotations: [{
        xref: "paper",
        yref: 'paper',
        x: -0.2,
        xanchor: 'left',
        y: 1.1,
        font: {
          family: "Arial",
          size: 20,
        },
        yanchor: 'bottom',
        text: 'Breakdown by Root Cause',
        showarrow: false
      }]
    },
    useResizeHandler: true,
    style: {width: "100%", height: "460px"},
    data: pieData
  }

  const barDataVis = {
    layout: {
      width: 700,
      margin: {
        l: 100,
        r: 50,
        b: 50,
        t: 100
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
        text: 'Terminated Recalls',
        showarrow: false
      }],
      showlegend: true,
      legend: {
        "orientation": "h",
        x: 0,
        y: -0.1
      },
      hovermode: "closest",
      barmode: "stack"
    },
    useResizeHandler: true,
    style: {width: "100%", height: "460px"},
    data: barData
  }


/*
<Plot {...causePie} />
<Plot {...causeYearCountVis} />
*/

  return(<Tab label={props.label}>
      <div className="col-12">
        <h3>Device Recalls</h3>
        {numRecalls} device recalls have been attributed to this product code  
        <div className="col-12" id="recall-vis-container" >
          <div id="plot-container">
            <Plot {...pieDataVis} />
          </div>
          <div>
            <Plot {...barDataVis} />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="col-12">
          Interact with the recall data directly by searching and sorting by different columns<br /><br />
          <h3>Terminated Recall Data</h3>
        </div>
        <ListTable
          data={results.items.filter(e => e.year != "")}
          headers={Object.keys(results.items[0])} />
      </div>
      <div className="col-12">
        <div className="col-12">
          <h3>Ongoing Recall Data</h3>
        </div>
        <ListTable
          data={results.items.filter(e => e.year == "")}
          headers={Object.keys(results.items[0])} />
      </div>
    </Tab>);
}

export default RecallData;