import { useState } from "react";

function RegisterForm({ onSubmit }) {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]:
                e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(form);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >

            <div>
                <label className="label-field">Usuario</label>
                <input
                    name="username"
                    placeholder="Tu nombre de usuario"
                    onChange={handleChange}
                    className="input-field"
                />
            </div>

            <div>
                <label className="label-field">Email</label>
                <input
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    onChange={handleChange}
                    className="input-field"
                />
            </div>

            <div>
                <label className="label-field">Contraseña</label>
                <input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    className="input-field"
                />
            </div>

            <button className="btn-primary w-full">
                Registrarse
            </button>

        </form>
    );
}

export default RegisterForm;