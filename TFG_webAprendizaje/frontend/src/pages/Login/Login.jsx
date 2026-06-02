import AuthLayout from "../../layouts/AuthLayout";

function Login() {

    return (
        <AuthLayout>

            <h2 className="text-2xl font-bold mb-5">
                Iniciar Sesión
            </h2>

            <form className="space-y-4">

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
                    className="w-full bg-indigo-600 text-white py-2 rounded"
                >
                    Entrar
                </button>

            </form>

        </AuthLayout>
    );
}

export default Login;