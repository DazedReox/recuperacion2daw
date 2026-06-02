import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

function ProgressChart({ data }) {

    const chartData = {

        labels: data.labels,

        datasets: [
            {
                label: "XP",
                data: data.values
            }
        ]
    };

    return (
        <Line data={chartData} />
    );
}

export default ProgressChart;