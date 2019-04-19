import React from 'react';
import Plot from 'react-plotly.js';

function BarChartTime(props) {
    /*
        format of props.data:
            {
                time: count,
                time: count,
                ...
            }
    */
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
    var sorted_time = Object.keys(props.data).sort();
    if (props.expand) {
        let time_anchor = sorted_time[0];
        for (let i = -2; i < 3; i++) {
            if (i != 0) {
                sorted_time.push( time_anchor + i );
            }
        }
        sorted_time = sorted_time.sort();
    }
    var timeCounts = {
        time: sorted_time,
        count: sorted_time.map(y => props.data[y] ? props.data[y] : 0)
    }
    var data = [{
        x: timeCounts.time,
        y: timeCounts.count,
        hoverinfo: "x+y",
        type: "bar",
        marker: {
            color: "#111EC6"
        }
    }]
    var layout = {
        annotations: [titleAnnot],
        margin: props.margin,
        hovermode: "closest",
        showlegend: false,
        autosize: true,
        yaxis: {
            title: props.axisSpecs.yTitle
        },
        xaxis: {
            title: ""
        }
    }
    var plotObject = {
        data: data,
        layout: layout,
        useResizeHandler: true,
        style: {width: width, height: height}
    }
    return (
        <Plot {...plotObject} />
    );
}

export default BarChartTime;