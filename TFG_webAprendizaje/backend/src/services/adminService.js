import pool from "../config/db.js";

const adminService = {

    getStats: async () => {

        const [[users]] =
            await pool.query(`
                SELECT COUNT(*) total
                FROM usuarios
            `);

        const [[courses]] =
            await pool.query(`
                SELECT COUNT(*) total
                FROM cursos
            `);

        const [[tests]] =
            await pool.query(`
                SELECT COUNT(*) total
                FROM tests
            `);

        const [[posts]] =
            await pool.query(`
                SELECT COUNT(*) total
                FROM publicaciones
            `);

        return {
            users: users.total,
            courses: courses.total,
            tests: tests.total,
            posts: posts.total
        };
    },

    getUsers: async () => {

        const [rows] =
            await pool.query(`
                SELECT
                    id,
                    username,
                    email,
                    level,
                    xp
                FROM usuarios
            `);

        return rows;
    }
};

export default adminService;