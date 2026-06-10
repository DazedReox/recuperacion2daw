import pool
from "../config/db.js";

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

        return user;
    }
};

export default statisticsService;