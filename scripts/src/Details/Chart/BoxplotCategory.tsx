import React from 'react';
import Plot from 'react-plotly.js';
import {keys, groupBy, orderBy, mean} from "lodash-es";
var {VIS_COLORS, lengthenColors} = require('./ChartUtils');

function BoxplotCategory(props) {
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
    var categoryCounts = groupBy(props.dataArray, props.x);
    VIS_COLORS = lengthenColors(VIS_COLORS, keys(categoryCounts).length);
    var categoryTraces = keys(categoryCounts).map((key,i) => ({
        y: categoryCounts[key].map(e => e[props.y]),
        name: key,
        marker: {
          opacity: .6,
          color: VIS_COLORS[i]
        },
        line: {
          width: 2,
        },
        boxpoints: 'all',
        jitter: .3,
        pointpos: 0,
        type: 'box'
    }))
    categoryTraces = orderBy(categoryTraces, e => mean(e.y), 'desc');
    var layout = {
        margin: props.margin,
        annotations: [titleAnnot],
        hovermode: "closest",
        showlegend: false,
        autosize: true,
        yaxis: {
            title: props.axisSpecs.yTitle,
            gridcolor: "gray"
        },
        font: {
            color: 'black'
        }
    }
    var plotObject = {
        layout: layout,
        data: categoryTraces,
        useResizeHandler: true,
        style: {width: width, height: height}
    }
    return (
        <Plot {...plotObject} />
    );
}

export default BoxplotCategory;