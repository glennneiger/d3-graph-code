import React from 'react';
import Plot from 'react-plotly.js';
import {values, keys} from "lodash-es";
var {VIS_COLORS, lengthenColors} = require('./ChartUtils');

function PieChart(props) {
    /*
        format of props.dataDict:
            keys: desired labels
            values: desired quantities
    */
    VIS_COLORS = lengthenColors(VIS_COLORS, keys(props.dataDict).length);
    var {titlePosX = 0.5, titlePosY = 1.1, titleFontSize = 16, title} = props.titleSpecs;
    var {width = "100%", height = "400px"} = props.styleSpecs;
    var titleAnnot = [{
        xref: 'paper',
        yref: 'paper',
        x: titlePosX,
        xanchor: 'center',
        y: titlePosY,
        font: {
          family: "Arial",
          size: titleFontSize,
        },
        yanchor: 'bottom',
        text: title,
        showarrow: false
      }];
    var layout = {
        annotations: titleAnnot,
        autosize: true,
        showlegend: false,
    }
    var data = [{
        values: values(props.dataDict),
        labels: keys(props.dataDict),
        type: 'pie',
        textinfo: 'label',
        textposition: 'outside',
        marker: {
            colors: VIS_COLORS
        }
    }]
    var plotObject = {
        layout: layout,
        data: data,
        useResizeHandler: true,
        style: {width: width, height: height}
    }
    return (
        <Plot {...plotObject} />
    )
}

export default PieChart;