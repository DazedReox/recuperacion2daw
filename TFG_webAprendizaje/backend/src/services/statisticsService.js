import pool from "../config/db.js";

const statisticsService = {

    getUserStats: async (
        userId
    ) => {

        const [[user]] =
            await pool.query(
                `
                SELECT
                    xp,
                    level
                FROM usuarios
                WHERE id = ?
                `,
                [userId]
            );

        const [statsRows] =
            await pool.query(
                `
                SELECT
                    study_hours,
                    tests_completed,
                    success_rate
                FROM estadisticas
                WHERE user_id = ?
                `,
                [userId]
            );

        const stats =
            statsRows[0] || {
                study_hours: 0,
                tests_completed: 0,
                success_rate: 0
            };

        return {
            xp: user.xp,
            level: user.level,
            study_hours:
                stats.study_hours,
            tests_completed:
                stats.tests_completed,
            success_rate:
                stats.success_rate
        };
    },

    updateStatistics: async (
        userId
    ) => {

        const [[results]] =
            await pool.query(
                `
                SELECT
                    COUNT(*) AS tests_completed,
                    AVG(score) AS success_rate
                FROM resultados
                WHERE user_id = ?
                `,
                [userId]
            );

        const [existing] =
            await pool.query(
                `
                SELECT *
                FROM estadisticas
                WHERE user_id = ?
                `,
                [userId]
            );

        if (
            existing.length === 0
        ) {

            await pool.query(
                `
                INSERT INTO estadisticas
                (
                    user_id,
                    tests_completed,
                    success_rate
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
                    results.tests_completed,
                    results.success_rate || 0
                ]
            );

        } else {

            await pool.query(
                `
                UPDATE estadisticas
                SET
                    tests_completed = ?,
                    success_rate = ?
                WHERE user_id = ?
                `,
                [
                    results.tests_completed,
                    results.success_rate || 0,
                    userId
                ]
            );
        }
    }
};

export default statisticsService;