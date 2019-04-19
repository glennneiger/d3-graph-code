import React from 'react';
import Plot from 'react-plotly.js';
import {values, keys} from "lodash-es";
var {VIS_COLORS, lengthenColors} = require('./ChartUtils');

interface IBarChartCategoryProps {
    titleSpecs: any,
    styleSpecs: any,
    dataDict: {
        [x: string]: number
    }
}

function BarChartCategory(props: IBarChartCategoryProps) {
    /*
        format of props.dataDict:
            keys: x values
            values: y values
    */
    VIS_COLORS = lengthenColors(VIS_COLORS, keys(props.dataDict).length);
    var {titlePosX = 0.5, titlePosY = 1.1, titleFontSize = 16, title} = props.titleSpecs;
    var {width = "100%", height = "400px"} = props.styleSpecs;
    var titleAnnot = [{
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
    }]
    var layout = {
        annotations: titleAnnot,
        autosize: true,
        showlegend: false
    }
    var data = [{
        x: keys(props.dataDict),
        y: values(props.dataDict),
        type: 'bar',
        marker: {
            color: VIS_COLORS
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

export default BarChartCategory;