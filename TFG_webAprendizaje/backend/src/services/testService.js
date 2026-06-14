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

    const [tests] =
        await pool.query(
            `
            SELECT *
            FROM tests
            WHERE id = ?
            `,
            [id]
        );

    if (!tests.length)
        return null;

    const test = tests[0];

    const [questions] =
        await pool.query(
            `
            SELECT *
            FROM preguntas
            WHERE test_id = ?
            `,
            [id]
        );

    for (const question of questions) {

        const [answers] =
            await pool.query(
                `
                SELECT *
                FROM respuestas
                WHERE question_id = ?
                `,
                [question.id]
            );

        question.answers =
            answers;
    }

    test.questions =
        questions;

    return test;
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
    },
    getFullTest: async (id) => {

    const [tests] =
        await pool.query(
            `
            SELECT *
            FROM tests
            WHERE id = ?
            `,
            [id]
        );

    const test = tests[0];

    if (!test)
        return null;

    const [questions] =
        await pool.query(
            `
            SELECT *
            FROM preguntas
            WHERE test_id = ?
            `,
            [id]
        );

    for (const question of questions) {

        const [answers] =
            await pool.query(
                `
                SELECT
                    id,
                    answer,
                    is_correct
                FROM respuestas
                WHERE question_id = ?
                `,
                [question.id]
            );

        question.answers =
            answers;
    }

    test.questions =
        questions;

    return test;
}
};

export default testService;