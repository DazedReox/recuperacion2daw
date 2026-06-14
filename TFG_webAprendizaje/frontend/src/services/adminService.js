import axios from "axios";
import { API_URL } from "../utils/constants";

const adminService = {

    getUsers: async () => {

        const token =
            localStorage.getItem("token");

        const response =
            await axios.get(
                `${API_URL}/admin/users`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

        return response.data;
    },

    getDashboardStats: async () => {

        const token =
            localStorage.getItem(
                "token"
            );

        const response =
            await axios.get(
                `${API_URL}/admin/dashboard`,
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

export default adminService;