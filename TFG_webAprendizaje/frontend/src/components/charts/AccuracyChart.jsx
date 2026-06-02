import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function AccuracyChart({
    correct,
    incorrect
}) {

    const data = {

        labels: [
            "Correctas",
            "Incorrectas"
        ],

        datasets: [
            {
                data: [
                    correct,
                    incorrect
                ]
            }
        ]
    };

    return (
        <Doughnut data={data} />
    );
}

export default AccuracyChart;