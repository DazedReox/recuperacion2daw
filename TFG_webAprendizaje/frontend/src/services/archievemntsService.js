import axios from "axios";
import { API_URL } from "../utils/constants";

const achievementService = {

    getAchievements: async () => {

        const response = await axios.get(
            `${API_URL}/achievements`
        );

        return response.data;
    },

    getUserAchievements: async () => {

        const response = await axios.get(
            `${API_URL}/achievements/user`
        );

        return response.data;
    }
};

export default achievementService;