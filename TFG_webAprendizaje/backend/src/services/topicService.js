import pool from "../config/db.js";

const topicService = {

    getByCourse: async (
        courseId
    ) => {

        const [rows] =
            await pool.query(
                `
                SELECT *
                FROM temas
                WHERE course_id = ?
                ORDER BY position
                `,
                [courseId]
            );

        return rows;
    },

    create: async (
        courseId,
        title,
        description
    ) => {

        const [result] =
            await pool.query(
                `
                INSERT INTO temas
                (
                    course_id,
                    title,
                    description
                )
                VALUES
                (
                    ?,
                    ?,
                    ?
                )
                `,
                [
                    courseId,
                    title,
                    description
                ]
            );

        return result;
    }
};

export default topicService;