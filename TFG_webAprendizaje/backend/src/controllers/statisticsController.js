import pool from "../config/db.js";
import statisticsService from "../services/statisticsService.js";

const getStatistics =
async (
    req,
    res
) => {

    const [rows] =
        await pool.query(
            `
            SELECT *
            FROM estadisticas
            WHERE user_id = ?
            `,
            [req.user.id]
        );

    res.json(rows[0]);
};

export {
    getStatistics
};

const getUserStats = async (
    req,
    res
) => {

    try {

        const stats =
            await statisticsService
                .getUserStats(
                    req.user.id
                );

        res.json(stats);

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

export {
    getUserStats
};