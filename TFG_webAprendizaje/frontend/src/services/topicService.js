import axios from "axios";
import { API_URL } from "../utils/constants";

const topicService = {

    getTopicsByCourse: async (courseId) => {

        const response = await axios.get(
            `${API_URL}/topics/${courseId}`
        );

        return response.data;
    },

    createTopic: async (topic) => {

        const response = await axios.post(
            `${API_URL}/topics`,
            topic
        );

        return response.data;
    },

    updateTopic: async (id, topic) => {

        const response = await axios.put(
            `${API_URL}/topics/${id}`,
            topic
        );

        return response.data;
    },

    deleteTopic: async (id) => {

        const response = await axios.delete(
            `${API_URL}/topics/${id}`
        );

        return response.data;
    }
};

export default topicService;