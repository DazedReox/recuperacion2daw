import axios from "axios";
import { API_URL } from "../utils/constants";

const adminService = {

    getUsers: async () => {

        const response = await axios.get(
            `${API_URL}/admin/users`
        );

        return response.data;
    },

    deleteUser: async (id) => {

        const response = await axios.delete(
            `${API_URL}/admin/users/${id}`
        );

        return response.data;
    },

    getDashboardStats: async () => {

        const response = await axios.get(
            `${API_URL}/admin/dashboard`
        );

        return response.data;
    }
};

export default adminService;