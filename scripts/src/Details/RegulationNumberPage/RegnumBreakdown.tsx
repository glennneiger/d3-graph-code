import React from "react";
import {groupBy, keys, union, toSafeInteger} from "lodash-es";
import { connect } from 'react-redux';
var {binReviewTimes, binDeviceClasses} = require('../Layout/LayoutUtils');
import PieChart from "src/Details/Chart/PieChart";
import BarChartCategory from "src/Details/Chart/BarChartCategory";

const mapStateToProps = state => ({
  results510k: state.details.result[1],
  resultsPMA: state.details.result[2],
  procodeBreakdown: state.details.result[3],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
};

function mergeGroupedValues(g1, g2) {
  const merged_keys = union(keys(g1), keys(g2));
  const merged = {};
  merged_keys.forEach(key => merged[key] = toSafeInteger(g1[key]) + toSafeInteger(g2[key]));
  return merged;
}
var titleSpecs = {
  titlePosX: 0.5,
  titlePosY: 1.1,
  titleFontSize: 16
}
var styleSpecs = {
  width: "100%",
  height: "400px"
}

function RegnumBreakdown(props) {
  if (props.results510k.items.length + props.resultsPMA.items.length == 0) {
    return (
      <div>There have been no premarket applications submitted under this regulation number.</div>
    );
  } else {

    // Product Codes
    var procodeCounts = mergeGroupedValues(
      props.results510k.aggregate.product_code.groups, 
      props.resultsPMA.aggregate.product_code.groups, 
    )

    // Review Times
    var reviewTimeCounts = mergeGroupedValues(
      props.results510k.aggregate.application_length.groups, 
      props.resultsPMA.aggregate.application_length.groups, 
    );
    var reviewTimeBins = binReviewTimes(reviewTimeCounts);
    
    // Application Types
    var appTypeCounts = {
      "510(k)": keys(props.results510k.items).length,
      "PMA": keys(props.resultsPMA.items).length
    }

    // Device Classes
    var deviceClassGroups = groupBy(props.procodeBreakdown.items, 'device_class');
    var deviceClassCounts = {};
    for (var key in deviceClassGroups) {
      deviceClassCounts[key] = deviceClassGroups[key].length;
    }
    var deviceClassBins = binDeviceClasses(deviceClassCounts);

    // check if there is only one product code, if so, omit product code pie chart
    var productCodeChart;
    if (keys(procodeCounts).length == 1) {
      productCodeChart = null;
    } else {
      productCodeChart = (
        <div className="col-12">
          <PieChart 
            titleSpecs={{title: "Applications by Product Code", ...titleSpecs}} 
            styleSpecs={styleSpecs}
            dataDict={procodeCounts} 
            />
        </div>
      )
    }
    
    return (
      <div className="row" id="proCodePie">
        {productCodeChart}
        <div className="col-12" id="doubleGraphRow">
          <BarChartCategory 
            titleSpecs={{title: "Application Type", ...titleSpecs}} 
            styleSpecs={styleSpecs}
            dataDict={appTypeCounts} />
          <BarChartCategory 
            titleSpecs={{title: "Review Times", ...titleSpecs}} 
            styleSpecs={styleSpecs}
            dataDict={reviewTimeBins} />
        </div>
        <div className="col-12">
          <BarChartCategory 
            titleSpecs={{title: "Product Code Class", ...titleSpecs}} 
            styleSpecs={styleSpecs}
            dataDict={deviceClassBins} />
        </div>
      </div>);
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegnumBreakdown);