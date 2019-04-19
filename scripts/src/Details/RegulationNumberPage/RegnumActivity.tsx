import React from "react";
import { connect } from 'react-redux';
var { mergeGroupedValues, splitDoubleKeys } = require('../Layout/LayoutUtils');
import StackBarChartTime from "../Chart/StackBarChartTime";
import BoxplotCategory from "../Chart/BoxplotCategory";

const mapStateToProps = state => ({
  results_510k: state.details.result[1],
  results_pma: state.details.result[2]
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
};

function RegnumActivity(props) {

  var procodeYearCounts510k = props.results_510k.aggregate["product_code|year"].groups;
  var procodeYearCountsPMA = props.results_pma.aggregate["product_code|year"].groups;
  var procodeYearCounts = mergeGroupedValues(procodeYearCounts510k, procodeYearCountsPMA);
  var procodeYearCountsSplit = splitDoubleKeys(procodeYearCounts, "|");
  var procodeYearCountProps = {
    dataDict: procodeYearCountsSplit,
    margin: {
      l: 50,
      r: 0,
      b: 50,
      t: 50
    },
    titleSpecs: {
      title: "Activity"
    },
    styleSpecs: {},
    legendSpecs: {
      orientation: "h",
      x: 0,
      y: -0.1
    },
    axisSpecs: {
      xTitle: "",
      yTitle: "Yearly Count"
    }
  }

  var allItems = props.results_510k.items.concat(props.results_pma.items);
  var reviewTimeBoxProps = {
    dataArray: allItems,
    x: "product_code",
    y: "application_length",
    margin: {
      l: 50,
      r: 0,
      b: 50,
      t: 60
    },
    titleSpecs: {
      titlePosY: 1.05,
      title: "Review Time"
    },
    styleSpecs: {},
    axisSpecs: {yTitle: "Review Time (days)"}
  }

  return (
  <div className="col-12">
    <div className="col-12">
      <h3>Application Timeline</h3>
      Explore a timeline of all the applications that have ever been submitted under this regulation number.
    </div>
    <div className="col-12">
      <StackBarChartTime {...procodeYearCountProps} />
    </div>
    <div className="col-12">
      <h3>Application Review Times</h3>
      Compare review times across all the product codes within this regulation number.
    </div>
    <div className="col-12">
      <BoxplotCategory {...reviewTimeBoxProps} />
    </div>
  </div>);
}
export default connect(mapStateToProps, mapDispatchToProps)(RegnumActivity);