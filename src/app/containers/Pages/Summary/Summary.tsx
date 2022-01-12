import * as React from "react";
import CardContent from "../../../components/UI/Card/CardContent";
import Chart from "react-apexcharts";
import CardBody from "app/components/UI/Card/CardBody";

interface SummaryProps {
}

const Summary: React.FC<SummaryProps> = (props: SummaryProps) => {


    const chart: any = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };

    const generateData = (count: number, yrange: any) => {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = (i + 1).toString();
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }

    const heatMap: any = {

        series: [{
            name: 'Jan',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Feb',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Mar',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Apr',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'May',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jun',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jul',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Aug',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Sep',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        }
        ],
        options: {
            chart: {
                height: 350,
                type: 'heatmap',
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    useFillColorAsStroke: true,
                    colorScale: {
                        ranges: [{
                            from: -30,
                            to: 5,
                            name: 'low',
                            color: '#00A100'
                        },
                        {
                            from: 6,
                            to: 20,
                            name: 'medium',
                            color: '#128FD9'
                        },
                        {
                            from: 21,
                            to: 45,
                            name: 'high',
                            color: '#FFB200'
                        },
                        {
                            from: 46,
                            to: 55,
                            name: 'extreme',
                            color: '#FF0000'
                        }
                        ]
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1
            },
            title: {
                text: 'HeatMap Chart with Color Range'
            },
        },
    };


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
        <CardBody title="Home" >
            <>
                <div className="row">
                    <div className="col-6">
                        <CardContent>
                            <Chart
                                options={chart.options}
                                series={chart.series}
                                type="bar"
                                width="100%"
                            />
                        </CardContent>
                    </div>
                    <div className="col-6">
                        <CardContent>
                            <Chart
                                options={heatMap.options}
                                series={heatMap.series}
                                type="heatmap"
                                width="100%"
                            />
                        </CardContent>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <CardContent>
                            <Chart
                                options={area.options}
                                series={area.series}
                                type="area"
                                width="100%"
                            />
                        </CardContent>
                    </div>
                    <div className="col-6">
                        <CardContent>
                            <Chart
                                options={radar.option}
                                series={radar.series}
                                type="radar"
                                width="100%"
                            />
                        </CardContent>
                    </div>
                </div>
            </>
        </CardBody >
    );
}

export default Summary;
