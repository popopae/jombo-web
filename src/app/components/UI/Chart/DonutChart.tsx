import * as React from "react";
import Chart from "react-apexcharts";

interface DonutChartProps {
    width: string;
}

const DonutChart: React.FC<DonutChartProps> = (props: DonutChartProps) => {
    const { width } = props;

    const chart: any = {
        options: {
            series: [44, 55, 41, 17, 15],
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    };

    return (
        <Chart
            options={chart.options}
            series={chart.series}
            type="donut"
            width={width}
        />
    );
}

export default DonutChart;
