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

            <div className="form-wrapper">

                <h2 className="section-title text-center">
                    Iniciar Sesión
                </h2>

                {error && (

                    <div className="alert-error">

                        {error}

                    </div>

                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <div>
                        <label className="label-field">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            className="input-field"
                        />
                    </div>

                    <div>
                        <label className="label-field">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            className="input-field"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full"
                    >
                        Entrar
                    </button>

                </form>

            </div>

        </AuthLayout>
    );
}

export default Login;
