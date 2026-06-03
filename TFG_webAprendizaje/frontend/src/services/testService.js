import axios from "axios";
import { API_URL } from "../utils/constants";

const testService = {

    getTests: async () => {

        const response = await axios.get(
            `${API_URL}/tests`
        );

        return response.data;
    },

    getTestById: async (id) => {

        const response = await axios.get(
            `${API_URL}/tests/${id}`
        );

        return response.data;
    },

    submitTest: async (
        testId,
        answers
    ) => {

        const response = await axios.post(
            `${API_URL}/tests/${testId}/submit`,
            { answers }
        );

        return response.data;
    }
};

export default testService;