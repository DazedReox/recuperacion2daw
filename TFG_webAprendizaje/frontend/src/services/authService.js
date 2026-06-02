import axios from "axios";

import { API_URL } from "../utils/constants";

const authService = {

    login: async (credentials) => {

        const response =
            await axios.post(
                `${API_URL}/auth/login`,
                credentials
            );

        return response.data;
    },

    register: async (userData) => {

        const response =
            await axios.post(
                `${API_URL}/auth/register`,
                userData
            );

        return response.data;
    }
};

export default authService;