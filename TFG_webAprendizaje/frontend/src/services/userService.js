import axios from "axios";
import { API_URL } from "../utils/constants";

const userService = {

    getProfile: async () => {

        const response = await axios.get(
            `${API_URL}/users/profile`
        );

        return response.data;
    },

    updateProfile: async (userData) => {

        const response = await axios.put(
            `${API_URL}/users/profile`,
            userData
        );

        return response.data;
    },

    deleteProfile: async () => {

        const response = await axios.delete(
            `${API_URL}/users/profile`
        );

        return response.data;
    }
};

export default userService;