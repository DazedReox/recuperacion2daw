import pool from "../config/db.js";

const forumService = {

    getPosts: async () => {

        const [rows] = await pool.query(`
            SELECT
                p.*,
                u.username
            FROM publicaciones p
            JOIN usuarios u
                ON p.user_id = u.id
            ORDER BY p.created_at DESC
        `);

        return rows;
    },

    getPostById: async (id) => {

        const [rows] = await pool.query(
            `
            SELECT *
            FROM publicaciones
            WHERE id = ?
            `,
            [id]
        );

        return rows[0];
    },

    createPost: async (
        userId,
        title,
        content
    ) => {

        const [result] =
            await pool.query(
                `
                INSERT INTO publicaciones
                (
                    user_id,
                    title,
                    content
                )
                VALUES
                (
                    ?,
                    ?,
                    ?
                )
                `,
                [
                    userId,
                    title,
                    content
                ]
            );

        return result;
    },

    createComment: async (
        postId,
        userId,
        content
    ) => {

        const [result] =
            await pool.query(
                `
                INSERT INTO comentarios
                (
                    post_id,
                    user_id,
                    content
                )
                VALUES
                (
                    ?,
                    ?,
                    ?
                )
                `,
                [
                    postId,
                    userId,
                    content
                ]
            );

        return result;
    }
};

export default forumService;