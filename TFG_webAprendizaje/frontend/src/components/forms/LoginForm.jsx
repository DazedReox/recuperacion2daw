import { useState } from "react";

function LoginForm({ onSubmit }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit({
            email,
            password
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
                className="w-full border p-2 rounded"
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                className="w-full border p-2 rounded"
            />

            <button
                className="w-full bg-indigo-600 text-white py-2 rounded"
            >
                Entrar
            </button>

        </form>
    );
}

export default LoginForm;