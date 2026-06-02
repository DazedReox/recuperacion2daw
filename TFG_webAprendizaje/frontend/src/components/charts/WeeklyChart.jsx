import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

function WeeklyChart({ data }) {

    const chartData = {

        labels: data.labels,

        datasets: [
            {
                label: "Horas estudiadas",
                data: data.values
            }
        ]
    };

    return (
        <Bar data={chartData} />
    );
}

export default WeeklyChart;