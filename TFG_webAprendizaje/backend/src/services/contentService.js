import pool from "../config/db.js";

const contentService = {

    getByTopic: async (
        topicId
    ) => {

        const [rows] =
            await pool.query(
                `
                SELECT *
                FROM contenidos
                WHERE topic_id = ?
                `,
                [topicId]
            );

        return rows;
    },

    create: async (
        topicId,
        title,
        content,
        pdf_url
    ) => {

        const [result] =
            await pool.query(
                `
                INSERT INTO contenidos
                (
                    topic_id,
                    title,
                    content,
                    pdf_url
                )
                VALUES
                (
                    ?,
                    ?,
                    ?,
                    ?
                )
                `,
                [
                    topicId,
                    title,
                    content,
                    pdf_url
                ]
            );

        return result;
    }
};

export default contentService;