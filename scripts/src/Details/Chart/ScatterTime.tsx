import React from 'react';
import Plot from 'react-plotly.js';
import createLoess from "./createLoess";
import {sortBy} from "lodash-es";

function ScatterTime(props) {
    var {titlePosX = 0, titlePosY = 1, titleFontSize = 20, title} = props.titleSpecs;
    var {width = "100%", height = "300px"} = props.styleSpecs;
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
    var items = sortBy(props.data, e => new Date(e[props.x]).getTime());
    var scatterPoints = {
        x: items.map(e => new Date(e[props.x]).getTime()),
        y: items.map(e => e[props.y])
    }
    var data = {
        x: scatterPoints.x,
        y: scatterPoints.y,
        text: items.map(e => e[props.id]),
        hoverinfo: "text",
        type: "scatter",
        mode: "markers",
        marker: {
            color: "#111EC6",
            opacity: 0.8,
            size: 8,
            symbol: "circle",
            line: {
                width: 1,
                color: "black"
            }
        }
    }
    if (scatterPoints.x.length > 10) {
        var {timelineUpperTrace, timelineLowerTrace} = createLoess(scatterPoints);
    }
    var layout = {
        margin: props.margin,
        annotations: [titleAnnot],
        hovermode: "closest",
        autosize: true,
        showlegend: false,
        yaxis: {
            title: props.axisSpecs.yTitle
        },
        xaxis: {
            title: props.axisSpecs.xTitle
        }
    }
    var plotObject = {
        data: [data, timelineUpperTrace, timelineLowerTrace],
        layout: layout,
        useResizeHandler: true,
        style: {
            width: width,
            height: height
        }
    }
    return (
        <Plot {...plotObject} />
    );
}

export default ScatterTime;