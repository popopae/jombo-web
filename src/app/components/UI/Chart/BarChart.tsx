import * as React from "react";
import Chart from "react-apexcharts";

interface BarChartProps {
    width: string;
}

const BarChart: React.FC<BarChartProps> = (props: BarChartProps) => {
    const { width } = props;

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

    return (
        <Chart
            options={chart.options}
            series={chart.series}
            type="bar"
            width={width}
        />
    );
}

export default BarChart;
