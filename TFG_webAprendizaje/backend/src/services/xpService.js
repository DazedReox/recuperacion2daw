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
            [
                xp,
                userId
            ]
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

        return rows[0];
    }
};

const level =
    Math.floor(
        userXp / 1000
    ) + 1;

export default xpService;