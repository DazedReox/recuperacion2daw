import pool from "../config/db.js";

const getProfile = async (
    req,
    res
) => {

    const [rows] =
        await pool.query(
            `
            SELECT
                id,
                username,
                email,
                xp,
                level
            FROM usuarios
            WHERE id = ?
            `,
            [req.user.id]
        );

    res.json(rows[0]);
};

const updateProfile = async (
    req,
    res
) => {

    const {
        username
    } = req.body;

    await pool.query(
        `
        UPDATE usuarios
        SET username = ?
        WHERE id = ?
        `,
        [
            username,
            req.user.id
        ]
    );

    res.json({
        message:
            "Perfil actualizado"
    });
};

export {
    getProfile,
    updateProfile
};