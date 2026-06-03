import pool from "../config/db.js";

const getAchievements =
async (
    req,
    res
) => {

    const [rows] =
        await pool.query(`
            SELECT *
            FROM logros
        `);

    res.json(rows);
};

const getUserAchievements =
async (
    req,
    res
) => {

    const [rows] =
        await pool.query(
            `
            SELECT l.*
            FROM logros l
            JOIN usuarios_logros ul
                ON l.id = ul.achievement_id
            WHERE ul.user_id = ?
            `,
            [req.user.id]
        );

    res.json(rows);
};

export {
    getAchievements,
    getUserAchievements
};