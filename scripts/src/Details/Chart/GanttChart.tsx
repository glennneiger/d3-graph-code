import React from 'react';
import Plot from 'react-plotly.js';
import {sortBy} from "lodash-es";

function GanttChart(props) {
  // props.items

  var ganttColorMap = {
    "": "blue",
    "30-Day Notice": "orange",
    "Normal 180 Day Track": "blue",
    "Real-Time Process": "green",
    "Normal 180 Day Track No User Fee": "purple",
    "135 Review Track For 30-Day Notice": "black",
    "Special (Immediate Track)": "navy",
    "Panel Track": "yellow",
    "THIRTY DAY TRACK": "red",
    "Special": "navy"
  }


  let items = sortBy(props.items, e => new Date(e.date_received).getTime());




  var ganttPoints = {
    start: items.map(e => new Date(e.date_received)),
    //start: items.map(e => new Date(e.date_received).getTime()),
    end: items.map(e => new Date(e.decision_date)),
    appLength: items.map(e => e.application_length),
    type: items.map(e => e.supplement_type),
    color: items.map(e => ganttColorMap[e.supplement_type])
  };

  var ganttTraces = {
    type: "bar",
    name: "This",
    text: [],
    marker: {color: []},
    hoverinfo: "x+text",
    y: [],
    x: [],
    base: [],
    orientation: "h"
  }

  for (let i = 0; i < ganttPoints.start.length; i++) {
    ganttTraces.text.push(ganttPoints.type[i]);
    ganttTraces.marker.color.push(ganttPoints.color[i]);
    ganttTraces.y.push(ganttPoints.type[i]);
    ganttTraces.x.push((ganttPoints.end[i].getTime() - ganttPoints.start[i].getTime()));
    ganttTraces.base.push(ganttPoints.start[i].getTime());
  }

  var ganttData = [ganttTraces];

  var timeline = [[2000, 2000.4], [2000.3, 2000.4], [2000.6, 2001.1]];
  var names = ["Initial Application", "180 Day Supplement", "Followup Review"];
  var colors = ["green", "blue", "blue"];

  var numMinutes = 2628000;
  var endRange = new Date(ganttPoints.start[0].getTime() + numMinutes*60000);

  var ganttLayout = {
    hovermode: "closest",
    margin: {
      l: 250,
      r: 50,
      b: 50,
      t: 50
    },
    showlegend: false,
    title: "Application Timeline",
    height: 400,
    width: 1400,
    xaxis: {
      range: [ganttPoints.start[0].getTime(), ganttPoints.end[ganttPoints.end.length - 1].getTime()],
      tickangle: 45
    },
    yaxis: {
      tickangle: 20
    }
  }

  return (<Plot
    data={ganttData}
    layout={ganttLayout}
  />);
}

export default GanttChart;