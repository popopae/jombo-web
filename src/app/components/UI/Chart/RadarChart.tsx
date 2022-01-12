import * as React from "react";
import Chart from "react-apexcharts";

interface RadarChartProps {
    width: string;
}

const RadarChart: React.FC<RadarChartProps> = (props: RadarChartProps) => {
    const { width } = props;

    const radar: any = {
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
        }],
        option: {
            height: 350,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            },

            title: {
                text: 'Radar Chart - Multi Series'
            },
            stroke: {
                width: 2
            },
            fill: {
                opacity: 0.1
            },
            markers: {
                size: 0
            },
            xaxis: {
                categories: ['2011', '2012', '2013', '2014', '2015', '2016']
            }
        }
    };
    return (
        <Chart
            options={radar.option}
            series={radar.series}
            type="radar"
            width={width}
        />
    );
}

export default RadarChart;

