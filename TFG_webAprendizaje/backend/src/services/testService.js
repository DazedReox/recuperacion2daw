import pool from "../config/db.js";

const testService = {

    getAll: async () => {

        const [rows] = await pool.query(`
            SELECT *
            FROM tests
        `);

        return rows;
    },

    getById: async (id) => {

        const [rows] = await pool.query(
            `
            SELECT *
            FROM tests
            WHERE id = ?
            `,
            [id]
        );

        return rows[0];
    },

    getQuestions: async (testId) => {

        const [rows] = await pool.query(
            `
            SELECT *
            FROM preguntas
            WHERE test_id = ?
            `,
            [testId]
        );

        return rows;
    },

    createResult: async (
        userId,
        testId,
        score,
        correctAnswers,
        totalQuestions
    ) => {

        const [result] =
            await pool.query(
                `
                INSERT INTO resultados
                (
                    user_id,
                    test_id,
                    score,
                    correct_answers,
                    total_questions
                )
                VALUES
                (
                    ?,
                    ?,
                    ?,
                    ?,
                    ?
                )
                `,
                [
                    userId,
                    testId,
                    score,
                    correctAnswers,
                    totalQuestions
                ]
            );

        return result;
    }
};

export default testService;