import pool from "../config/db.js";

const courseService = {

    getAll: async () => {

        const [rows] =
            await pool.query(`
                SELECT *
                FROM cursos
                ORDER BY id DESC
            `);

        return rows;
    },

    getById: async (id) => {

        const [rows] =
            await pool.query(
                `
                SELECT *
                FROM cursos
                WHERE id = ?
                `,
                [id]
            );

        return rows[0];
    },

    create: async (
        title,
        description,
        image_url
    ) => {

        const [result] =
            await pool.query(
                `
                INSERT INTO cursos
                (
                    title,
                    description,
                    image_url
                )
                VALUES
                (
                    ?,
                    ?,
                    ?
                )
                `,
                [
                    title,
                    description,
                    image_url
                ]
            );

        return result;
    },

    update: async (
        id,
        title,
        description
    ) => {

        const [result] =
            await pool.query(
                `
                UPDATE cursos
                SET
                    title = ?,
                    description = ?
                WHERE id = ?
                `,
                [
                    title,
                    description,
                    id
                ]
            );

        return result;
    },

    delete: async (id) => {

        const [result] =
            await pool.query(
                `
                DELETE FROM cursos
                WHERE id = ?
                `,
                [id]
            );

        return result;
    }
};

export default courseService;