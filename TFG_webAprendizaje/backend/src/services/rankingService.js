import pool from "../config/db.js";

const rankingService = {

    getTopUsers: async () => {

        const [rows] =
            await pool.query(`
                SELECT
                    id,
                    username,
                    xp,
                    level
                FROM usuarios
                ORDER BY xp DESC
                LIMIT 10
            `);

        return rows;
    }
};

export default rankingService;