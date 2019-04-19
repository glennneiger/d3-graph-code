///// <reference path="./charts.d.ts" />
import {reverse} from "lodash-es";
import Loess from "loess";

function elementArrayAdd(array1, array2, multiplier = 1) {
  var newArray = [];
  for(let i = 0; i < array1.length; i++) {
    newArray[i] = array1[i] + (multiplier * array2[i]);
  }
  return newArray;
}

function createLoess(timelinePoints) {
  var optionsLoess /*optional*/ = {
    span: 0.75, // 0 to inf, default 0.75
    band: .9, // 0 to 1, default 0
    degree: 2,// [0, 1, 2] || ['constant', 'linear', 'quadratic'] // default 2
    normalize: true, // default true if degree > 1, false otherwise
    robust: true, // default false
    iterations: 4 //default 4 if robust = true, 1 otherwise
  };

  let loessModel = new Loess(timelinePoints, optionsLoess);
  let loessFit = loessModel.predict();
  let loess = loessFit.fitted;
  let upper = elementArrayAdd(loessFit.fitted, loessFit.halfwidth);
  let lower = elementArrayAdd(loessFit.fitted, loessFit.halfwidth, -1);

  var timelineLoessTrace = {
    x: timelinePoints.x,
    y: loess,
    name: "Loess Fit",
    hoverinfo: 'name',
    line: {color: "rgb(31, 119, 180)"},
    type: 'scatter',
    xaxis: 'x',
    yaxis: 'y',
    mode: "lines",
    showlegend: true
  };

  var timelineUpperTrace = {
    x: timelinePoints.x,
    y: upper,
    name: "Upper Error",
    fill: "tonexty",
    hoverinfo: 'name',
    fillcolor: "rgba(0,100,80,0.2)",
    line: {color: "gray", dash: "dashdot"},
    marker: {color: "444"},
    type: 'scatter',
    xaxis: 'x',
    yaxis: 'y',
    mode: "lines",
    showlegend: false
  };

  var timelineLowerTrace = {
    x: timelinePoints.x,
    y: lower,
    name: "Lower Error",
    hoverinfo: 'name',
    fill: "tonexty",
    fillcolor: "rgba(0,100,80,0.2)",
    marker: {color: "444"},
    line: {color: "gray", dash: "dashdot"},
    type: 'scatter',
    xaxis: 'x',
    yaxis: 'y',
    mode: "lines",
    showlegend: false
  };

  return {timelineLoessTrace, timelineUpperTrace, timelineLowerTrace};
}
export default createLoess;