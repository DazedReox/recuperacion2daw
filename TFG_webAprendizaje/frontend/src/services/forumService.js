import axios from "axios";
import { API_URL } from "../utils/constants";

const forumService = {

    getPosts: async () => {

        const response = await axios.get(
            `${API_URL}/posts`
        );

        return response.data;
    },

    getPostById: async (id) => {

        const response = await axios.get(
            `${API_URL}/posts/${id}`
        );

        return response.data;
    },

    createPost: async (post) => {

        const response = await axios.post(
            `${API_URL}/posts`,
            post
        );

        return response.data;
    },

    createComment: async (comment) => {

        const response = await axios.post(
            `${API_URL}/comments`,
            comment
        );

        return response.data;
    }
};

export default forumService;