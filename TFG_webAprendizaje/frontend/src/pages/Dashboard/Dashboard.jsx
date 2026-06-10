import { useAuth } from "../../hooks/useAuth";

function Dashboard() {

    const { user } = useAuth();

    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Bienvenido, {user?.username}
            </h1>

            <div className="grid md:grid-cols-4 gap-4">

                <div className="bg-white shadow rounded p-4">
                    <h3 className="font-semibold">
                        Nivel
                    </h3>
                    <p className="text-2xl">
                        {user?.level || 1}
                    </p>
                </div>

                <div className="bg-white shadow rounded p-4">
                    <h3 className="font-semibold">
                        XP
                    </h3>
                    <p className="text-2xl">
                        {user?.xp || 0}
                    </p>
                </div>

                <div className="bg-white shadow rounded p-4">
                    <h3 className="font-semibold">
                        Cursos
                    </h3>
                    <p className="text-2xl">
                        0
                    </p>
                </div>

                <div className="bg-white shadow rounded p-4">
                    <h3 className="font-semibold">
                        Logros
                    </h3>
                    <p className="text-2xl">
                        0
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;