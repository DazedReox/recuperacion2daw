import pool from "../config/db.js";

const statisticsService = {

    updateStatistics: async (
        userId
    ) => {

        const [tests] =
            await pool.query(
                `
                SELECT COUNT(*) total
                FROM resultados
                WHERE user_id = ?
                `,
                [userId]
            );

        await pool.query(
            `
            UPDATE estadisticas
            SET tests_completed = ?
            WHERE user_id = ?
            `,
            [
                tests[0].total,
                userId
            ]
        );
    }
};

export default statisticsService;