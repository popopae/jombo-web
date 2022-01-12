import * as React from "react";
import Chart from "react-apexcharts";


interface AreaChartProps {
    width: string;
}

const AreaChart: React.FC<AreaChartProps> = (props: AreaChartProps) => {
    const { width } = props;
    
    const generateDayWiseTimeSeries = (baseval: any, count: any, yrange: any) => {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

    const area: any = {
        series: [
            {
                name: 'South',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'North',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 20
                })
            },
            {
                name: 'Central',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 15
                })
            }
        ],
        options: {
            chart: {
                type: 'area',
                height: 350,
                stacked: true,
                events: {
                    selection: function (chart: any, e: any) {
                        console.log(new Date(e.xaxis.min))
                    }
                },
            },
            colors: ['#008FFB', '#00E396', '#CED4DC'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8,
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
        },
    };

    return (
        <Chart
            options={area.options}
            series={area.series}
            type="area"
            width={width}
        />
    );
}

export default AreaChart;
