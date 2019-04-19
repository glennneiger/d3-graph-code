import React from 'react';
import Plot from 'react-plotly.js';
import { Tabs, Tab } from "src/Details/Tabs/Tabs";
import {sortBy} from "lodash-es";
import createLoess from "src/Details/Chart/createLoess";
import ListTable from "src/Details/Table/ListTable/ListTable";
import BarChartTime from "../Chart/BarChartTime";
import ScatterTime from "../Chart/ScatterTime";

function ApplicationActivity(props: {label: string, results: any}) {
  let results = props.results;
  if (!results.items.length) return <Tab />;
  var expand = (Object.keys(results.aggregate.year.groups).length == 1) ? true : false

  var yearCountProps = {
    data: results.aggregate.year.groups,
    expand: expand,
    titleSpecs: {
      titlePosY: 1.2,
      title: 'Volume'
    },
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 100
    },
    styleSpecs: {},
    axisSpecs: {
      yTitle: 'Yearly Count',
    }
  }

  var idField;
  if ("k_number" in results.items[0]) {
    idField = "k_number";
  } else {
    idField = "pma_number";
  }

  var timelineProps = {
    data: results.items,
    x: "date_received",
    y: "application_length",
    id: idField,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 20
    },
    expand: expand,
    titleSpecs: {
      title: "Review Time"
    },
    styleSpecs: {},
    axisSpecs: {
      yTitle: 'Review Time (days)',
      xTitle: "Date Received"
    }
  }

  return (<Tab label={props.label}>
      <div className="col-12">
        <h3>Application Timeline</h3>
        Explore a timeline of all the applications that have ever been submitted under this product code.
      </div>
      <div className="col-12">
        <BarChartTime {...yearCountProps} />
      </div>
      <div className="col-12">
        <ScatterTime {...timelineProps} />
      </div>
      <div className="col-12">
        <div className="col-12">
          <h3>Raw Application Data</h3>
          Interact with the application data directly by sorting and searching different column values.<br /><br />
        </div>
        <ListTable
          data={results.items}
          headers={Object.keys(results.items[0])} />
      </div>
    </Tab>);
}

export default ApplicationActivity;
