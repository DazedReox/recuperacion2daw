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

            <input
                name="username"
                placeholder="Usuario"
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <input
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <button
                className="w-full bg-green-600 text-white py-2 rounded"
            >
                Registrarse
            </button>

        </form>
    );
}

export default RegisterForm;