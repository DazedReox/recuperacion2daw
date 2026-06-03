import axios from "axios";
import { API_URL } from "../utils/constants";

const courseService = {

    getCourses: async () => {

        const response = await axios.get(
            `${API_URL}/courses`
        );

        return response.data;
    },

    getCourseById: async (id) => {

        const response = await axios.get(
            `${API_URL}/courses/${id}`
        );

        return response.data;
    },

    createCourse: async (course) => {

        const response = await axios.post(
            `${API_URL}/courses`,
            course
        );

        return response.data;
    },

    updateCourse: async (id, course) => {

        const response = await axios.put(
            `${API_URL}/courses/${id}`,
            course
        );

        return response.data;
    },

    deleteCourse: async (id) => {

        const response = await axios.delete(
            `${API_URL}/courses/${id}`
        );

        return response.data;
    }
};

export default courseService;