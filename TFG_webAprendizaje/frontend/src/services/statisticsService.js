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
    },

    getMyStats: async () => {

        const token =
            localStorage.getItem("token");

        const response =
            await axios.get(
                `${API_URL}/statistics/me`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

        return response.data;
    }
};

export default statisticsService;