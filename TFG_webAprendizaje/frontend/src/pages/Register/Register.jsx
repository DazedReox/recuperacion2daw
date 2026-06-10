import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";

import authService from "../../services/authService";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const [success, setSuccess] =
        useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await authService.register({
                username,
                email,
                password
            });

            setSuccess(
                "Usuario registrado correctamente"
            );

            setTimeout(() => {

                navigate("/login");

            }, 1500);

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Error al registrarse"
            );
        }
    };

    return (

        <AuthLayout>

            <h2 className="text-2xl font-bold mb-5">
                Registro
            </h2>

            {error && (

                <div className="bg-red-100 text-red-700 p-2 rounded mb-4">

                    {error}

                </div>

            )}

            {success && (

                <div className="bg-green-100 text-green-700 p-2 rounded mb-4">

                    {success}

                </div>

            )}

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) =>
                        setUsername(
                            e.target.value
                        )
                    }
                    className="w-full border p-2 rounded"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }
                    className="w-full border p-2 rounded"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                    className="w-full border p-2 rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded"
                >
                    Registrarse
                </button>

            </form>

        </AuthLayout>
    );
}

export default Register;