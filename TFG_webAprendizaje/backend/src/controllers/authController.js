import bcrypt from "bcrypt";

import authService from "../services/authService.js";

import { generateToken }
from "../config/jwt.js";

const register = async (
    req,
    res
) => {

    try {

        const {
            username,
            email,
            password
        } = req.body;

        const existingUser =
            await authService.findUserByEmail(
                email
            );

        if (existingUser) {

            return res.status(400).json({
                message:
                    "El usuario ya existe"
            });
        }

        const hashedPassword =
            await bcrypt.hash(
                password,
                10
            );

        await authService.createUser(
            username,
            email,
            hashedPassword
        );

        res.status(201).json({
            message:
                "Usuario registrado"
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

const login = async (
    req,
    res
) => {

    try {

        const {
            email,
            password
        } = req.body;

        const user =
            await authService.findUserByEmail(
                email
            );

        if (!user) {

            return res.status(401).json({
                message:
                    "Credenciales inválidas"
            });
        }

        const validPassword =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!validPassword) {

            return res.status(401).json({
                message:
                    "Credenciales inválidas"
            });
        }

        const token =
            generateToken({
                id: user.id,
                role:
                    user.role_id
            });

        res.json({
            token,
            user
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

export {
    register,
    login
};