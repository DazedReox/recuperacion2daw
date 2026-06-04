import pool from "../config/db.js";

const xpService = {

    addXp: async (
        userId,
        xp
    ) => {

        await pool.query(
            `
            UPDATE usuarios
            SET xp = xp + ?
            WHERE id = ?
            `,
            [xp, userId]
        );

        const [rows] =
            await pool.query(
                `
                SELECT xp
                FROM usuarios
                WHERE id = ?
                `,
                [userId]
            );

        const currentXp =
            rows[0].xp;

        const level =
            Math.floor(
                currentXp / 1000
            ) + 1;

        await pool.query(
            `
            UPDATE usuarios
            SET level = ?
            WHERE id = ?
            `,
            [
                level,
                userId
            ]
        );

        return {
            xp: currentXp,
            level
        };
    }
};

export default xpService;