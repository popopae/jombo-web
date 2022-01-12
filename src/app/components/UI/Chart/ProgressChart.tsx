import * as React from "react";
import Chart from "react-apexcharts";

interface ProgressChartProps {
    width: string;
    value: string;
    label: string
}

const ProgressChart: React.FC<ProgressChartProps> = (props: ProgressChartProps) => {
    const { width, value, label } = props;

    const progress: any = {
        options: {
            chart: {
                height: 280,
                type: "radialBar",
            },

            series: [value],
            colors: ["#20E647"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#293450"
                    },
                    track: {
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            blur: 4,
                            opacity: 0.15
                        }
                    },
                    dataLabels: {
                        name: {
                            offsetY: -10,
                            color: "#fff",
                            fontSize: "13px"
                        },
                        value: {
                            color: "#fff",
                            fontSize: "13px",
                            show: true
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "vertical",
                    gradientToColors: ["#87D4F9"],
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: "round"
            },
            labels: [label]
        }
    };



    return (
        <Chart
            options={progress.options}
            series={progress.options.series}
            type="radialBar"
            width={width}
        />
    );
}

export default ProgressChart;

