import AuthLayout from "../../layouts/AuthLayout";

function Register() {

    return (
        <AuthLayout>

            <h2 className="text-2xl font-bold mb-5">
                Registro
            </h2>

            <form className="space-y-4">

                <input
                    type="text"
                    placeholder="Usuario"
                    className="w-full border p-2 rounded"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border p-2 rounded"
                />

                <button
                    className="w-full bg-green-600 text-white py-2 rounded"
                >
                    Registrarse
                </button>

            </form>

        </AuthLayout>
    );
}

export default Register;