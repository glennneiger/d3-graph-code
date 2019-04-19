import React from 'react';
import Plot from "react-plotly.js";
import {groupBy, orderBy, sortBy, mergeWith, keys, values, union, toSafeInteger} from "lodash-es";
import { connect } from 'react-redux';
var {reviewTimeBins} = require('./LayoutUtils');

const mapStateToProps = state => {
  let aggIndex = 1;
  if ("pma_number" in state.details.result[0].item) {
    aggIndex = 2;
  }
  return {results_single: state.details.result[0],
          results_agg: state.details.result[aggIndex]};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
};

function Stats(props) {
  
  var appType;
  if ("pma_number" in props.results_single.item) {
    appType = "PMA";
  } else {
    appType = "510(k)";
  }

  var singleTime = parseInt(props.results_single.item.application_length);

  var belowCount = 0;
  var totalCount = 0;

  var aggTimes = props.results_agg.aggregate.application_length.groups;
  
  var binnedColor = {
    "<30 days": "black",
    "30 - 90 days": "black",
    "90 days - 6 mo": "black",
    "6 mo - 1 yr": "black",
    "1 - 2 yr": "black",
    ">3 yr": "black"
  };
  var singleBin;
  if (singleTime < 30) {
    binnedColor["<30 days"] = "green";
    singleBin = "<30 days";
  } else if (singleTime < 90) {
    binnedColor["30 - 90 days"] = "green";
    singleBin = "30 - 90 days";
  } else if (singleTime < 186) {
    binnedColor["90 days - 6 mo"] = "green";
    singleBin = "90 days - 6 mo";
  } else if (singleTime < 365) {
    binnedColor["6 mo - 1 yr"] = "green";
    singleBin = "6 mo - 1 yr";
  } else if (singleTime < 730) {
    binnedColor["1 - 2 yr"] = "green";
    singleBin = "1 - 2 yr";
  } else {
    binnedColor[">3 yr"] = "green";
    singleBin = ">3 yr";
  }
  for (var key in aggTimes) {
    let intValue = parseInt(key);
    if (intValue < singleTime) {
      belowCount += aggTimes[key];
    }
    if (intValue < 30) {
      reviewTimeBins["<30 days"] += aggTimes[key];
    } else if (intValue < 90) {
      reviewTimeBins["30 - 90 days"] += aggTimes[key];
    } else if (intValue < 186) {
      reviewTimeBins["90 days - 6 mo"] += aggTimes[key];
    } else if (intValue < 365) {
      reviewTimeBins["6 mo - 1 yr"] += aggTimes[key];
    } else if (intValue < 730) {
      reviewTimeBins["1 - 2 yr"] += aggTimes[key];
    } else {
      reviewTimeBins[">3 yr"] += aggTimes[key];
    }
    totalCount += aggTimes[key];
  }
/*
  for (var key in reviewTimeBins) {
    if (reviewTimeBins[key] == 0) {
      delete reviewTimeBins[key];
      delete binnedColor[key];
    }
  }
*/
  var percentage = (belowCount / totalCount) * 100;

  var opinion;
  if (percentage < 30 && percentage > 0) {
    opinion = " only ";
  } else {
    opinion = " ";
  }

  var count;
  if (belowCount == totalCount - 1) {
    count = "none";
  } else if (belowCount == 0) {
    count = "all";
  } else {
    count = totalCount - belowCount;
  }

  const revTimeBar = {
    layout: {
      margin: {
        l: 20,
        r: 20,
        b: 50,
        t: 40
      },
      annotations: [{
        x: singleBin,
        y: reviewTimeBins[singleBin],
        xref: 'x',
        yref: 'y',
        text: 'This application',
        showarrow: true,
        arrowhead: 0,
        ax: 20,
        ay: -20
      }],
      autosize: true,
      showlegend: false
    },
    useResizeHandler: true,
    style: {width: "100%", height: "400px"},
    data: [{
      x: keys(reviewTimeBins),
      y: values(reviewTimeBins),
      type: "bar",
      marker: {color: values(binnedColor)}
    }]
  }

  return (
  <div className="row">
    <div className="col-12">
      <div className="mt-4 px-4">
        The review time for this application was shorter than <br/> <strong>{count} </strong> of the <strong>{totalCount - 1} </strong>(total) premarket
        applications submitted under this product code ({props.results_single.item.product_code}).
      </div>
      <Plot {...revTimeBar} />
    </div>
  </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);