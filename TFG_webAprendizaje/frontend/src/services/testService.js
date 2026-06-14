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
        score,
        correctAnswers,
        totalQuestions
    ) => {
        
        const token =
            localStorage.getItem("token");

        const response =
            await axios.post(
                `${API_URL}/tests/submit`,
                {
                    testId,
                    score,
                    correctAnswers,
                    totalQuestions
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

        return response.data;
    },
    submitResult: async (result) => {

        const token =
            localStorage.getItem(
                "token"
            );

        const response =
            await axios.post(

                `${API_URL}/tests/submit`,

                result,

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

export default testService;