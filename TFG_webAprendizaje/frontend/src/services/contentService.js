import axios from "axios";
import { API_URL } from "../utils/constants";

const contentService = {

    getByTopic: async (topicId) => {

        const response =
            await axios.get(
                `${API_URL}/contents/topic/${topicId}`
            );

        return response.data;
    },

    createContent: async (content) => {

        const response = await axios.post(
            `${API_URL}/contents`,
            content
        );

        return response.data;
    },

    updateContent: async (id, content) => {

        const response = await axios.put(
            `${API_URL}/contents/${id}`,
            content
        );

        return response.data;
    },

    deleteContent: async (id) => {

        const response = await axios.delete(
            `${API_URL}/contents/${id}`
        );

        return response.data;
    }
};

export default contentService;