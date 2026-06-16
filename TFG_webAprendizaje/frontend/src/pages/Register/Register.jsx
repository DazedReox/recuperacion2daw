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
            <div className="form-wrapper">
                <h2 className="section-title text-center">
                    Registro
                </h2>
                {error && (
                    <div className="alert-error">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="alert-success">
                        {success}
                    </div>
                )}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div>
                        <label className="label-field">
                            Usuario
                        </label>
                        <input
                            type="text"
                            placeholder="Tu nombre de usuario"
                            value={username}
                            onChange={(e) =>
                                setUsername(
                                    e.target.value
                                )
                            }
                            className="input-field"
                        />
                    </div>
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
                        Registrarse
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
}

export default Register;
