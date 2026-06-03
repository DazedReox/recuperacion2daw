import axios from "axios";
import { API_URL } from "../utils/constants";

const statisticsService = {

    getStatistics: async () => {

        const response = await axios.get(
            `${API_URL}/statistics`
        );

        return response.data;
    },

    getProgress: async () => {

        const response = await axios.get(
            `${API_URL}/statistics/progress`
        );

        return response.data;
    },

    getWeeklyStats: async () => {

        const response = await axios.get(
            `${API_URL}/statistics/weekly`
        );

        return response.data;
    }
};

export default statisticsService;