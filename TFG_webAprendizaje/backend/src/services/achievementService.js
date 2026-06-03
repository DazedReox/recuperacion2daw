import pool from "../config/db.js";

const achievementService = {

    checkAchievements: async (
        userId
    ) => {

        const [userRows] =
            await pool.query(
                `
                SELECT *
                FROM usuarios
                WHERE id = ?
                `,
                [userId]
            );

        const user =
            userRows[0];

        if (user.xp >= 500) {

            await pool.query(
                `
                INSERT IGNORE INTO usuarios_logros
                (
                    user_id,
                    achievement_id
                )
                VALUES
                (
                    ?,
                    2
                )
                `,
                [userId]
            );
        }
    }
};

export default achievementService;