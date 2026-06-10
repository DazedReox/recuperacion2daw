import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";

import authService from "../../services/authService";

import { useAuth } from "../../hooks/useAuth";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data =
                await authService.login({
                    email,
                    password
                });

            localStorage.setItem(
                "token",
                data.token
            );

            login(data.user);

            navigate("/dashboard");

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Error al iniciar sesión"
            );
        }
    };

    return (

        <AuthLayout>

            <h2 className="text-2xl font-bold mb-5">
                Iniciar Sesión
            </h2>

            {error && (

                <div className="bg-red-100 text-red-700 p-2 rounded mb-4">

                    {error}

                </div>

            )}

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

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
                    className="w-full bg-indigo-600 text-white py-2 rounded"
                >
                    Entrar
                </button>

            </form>

        </AuthLayout>
    );
}

export default Login;