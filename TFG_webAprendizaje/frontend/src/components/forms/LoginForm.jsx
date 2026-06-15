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

            <div>
                <label className="label-field">Email</label>
                <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="input-field"
                />
            </div>

            <div>
                <label className="label-field">Contraseña</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="input-field"
                />
            </div>

            <button className="btn-primary w-full">
                Entrar
            </button>

        </form>
    );
}

export default LoginForm;