import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import {values, keys, orderBy} from "lodash-es";
var {VIS_COLORS, lengthenColors} = require('./ChartUtils');

function StackBarChartTime(props) {
    /*
        format of props.dataDict:
            {
                'key1': {key2: count, key2: count},
                'key1': {key2: count, key2: count}
            }
    */
    var {titlePosX = 0, titlePosY = 1, titleFontSize = 20, title} = props.titleSpecs;
    var {width = "100%", height = "460px"} = props.styleSpecs;
    var titleAnnot = {
        xref: 'paper',
        yref: 'paper',
        x: titlePosX,
        xanchor: 'left',
        y: titlePosY,
        font: {
            family: "Arial",
            size: titleFontSize,
        },
        yanchor: 'bottom',
        text: title,
        showarrow: false
    }
    VIS_COLORS = lengthenColors(VIS_COLORS, keys(props.dataDict).length);
    var dataTraces = [];
    var colorIndex = 0;
    for (var key in props.dataDict) {
        let tempTrace = {
        name: key,
        hoverinfo: "name+x+y",
        type: "bar",
        marker: {
            color: VIS_COLORS[colorIndex]
        },
        x: keys(props.dataDict[key]),
        y: values(props.dataDict[key])
        }
        colorIndex += 1;
        dataTraces.push(tempTrace);
    }
    dataTraces = orderBy(dataTraces, e => e.y.reduce((a, b) => a + b, 0), 'asc');
    var layout = {
        margin: props.margin,
        annotations: [titleAnnot],
        hovermode: "closest",
        autosize: true,
        showlegend: true,
        legend: {
            "orientation": props.legendSpecs.orientation,
            x: props.legendSpecs.x,
            y: props.legendSpecs.y
        },
        barmode: "stack",
        yaxis: {
            title: props.axisSpecs.yTitle
        },
        xaxis: {
            title: props.axisSpecs.xTitle
        }
    }
    var plotObject = {
        layout: layout,
        useResizeHandler: true,
        style: {
            width: width, height: height
        },
        data: dataTraces
    }
    return (
        <Plot {...plotObject} />
    );
}

export default StackBarChartTime;