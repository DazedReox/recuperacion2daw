import pool from "../config/db.js";

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