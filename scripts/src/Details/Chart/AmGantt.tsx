import React from 'react';
import Plot from 'react-plotly.js';
import {sortBy} from "lodash-es";
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/gantt';
import AmCharts from "@amcharts/amcharts3-react";

function AMGantt(props) {

  console.log(props.items);

  var ganttColorMap = {
    "": '#4e90e2',
    "30-Day Notice": '#3ebfe0',
    "Normal 180 Day Track": '#563746',
    "Real-Time Process": '#3e81e0',
    "Normal 180 Day Track No User Fee": '#a7e2f1',
    "135 Review Track For 30-Day Notice": '#156a7f',
    "Special (Immediate Track)": '#1fa1c1',
    "Panel Track": '#4e90e2',
    "THIRTY DAY TRACK": '#3ebfe0',
    "Special": '#563746'
  }

  let items = sortBy(props.items, e => new Date(e.date_received).getTime());
  
  var categories = {};
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let key = item.supplement_type;
    if (key == "") {
      key = "Standard Application";
    }
    let value = {
      "start": item.date_received,
      "end": item.decision_date,
      "color": ganttColorMap[item.supplement_type],
      "task": (item.supplement_number + " - " + item.supplement_reason).replace("/", " / ")
    }
    if (!(key in categories)) {
      categories[key] = [value];
    } else {
      categories[key].push(value);
    }
  }

  var ganttDataProvider = [];
  for (var key in categories) {
    let category = {
      "category": key,
      "segments": categories[key]
    }
    ganttDataProvider.push(category);
  }

  var config = {
    "type": "gantt",
    "pathToImages": "https://www.amcharts.com/lib/3/images/",
    "theme": "light",
    "marginRight": 70,
    "period": "DD",
    "dataDateFormat":"YYYY-MM-DD",
    "columnWidth": 0.5,
    "valueAxis": {
        "type": "date"
    },
    "brightnessStep": 1,
    "graph": {
        "fillAlphas": 1,
        "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
    },
    "rotate": true,
    "categoryField": "category",
    "segmentsField": "segments",
    "colorField": "color",
    "startDateField": "start",
    "endDateField": "end",
    "dataProvider": ganttDataProvider,
    "valueScrollbar": {
        "autoGridCount":true
    },
    "chartCursor": {
        "cursorColor":"#55bb76",
        "valueBalloonsEnabled": false,
        "cursorAlpha": 0,
        "valueLineAlpha":0.5,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true,
        "zoomable":false,
        "valueZoomable":true
    },
    "export": {
        "enabled": true
    }
  };

  return (
    <AmCharts.React
      className="my-class"
      style={{
        width: "100%",
        height: "500px"
      }}
      options={config}
    />
  );
}

export default AMGantt;