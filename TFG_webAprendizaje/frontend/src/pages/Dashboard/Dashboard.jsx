import { useAuth } from "../../hooks/useAuth";

function Dashboard() {

    const { user } = useAuth();

    return (

        <div className="p-6">

            <h1 className="text-4xl font-bold mb-8">
                Bienvenido, {user?.username}
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-indigo-600 text-white p-6 rounded-xl">
                <h3>Nivel</h3>
                <p className="text-4xl font-bold">
                    {user?.level}
                </p>
            </div>

            <div className="bg-green-600 text-white p-6 rounded-xl">
                <h3>XP Total</h3>
                <p className="text-4xl font-bold">
                    {user?.xp}
                </p>
            </div>

            <div className="bg-slate-800 text-white p-6 rounded-xl">
                <h3>Progreso</h3>
                <p className="text-4xl font-bold">
                    {user?.xp % 1000}/1000
                </p>
            </div>

            </div>

        </div>
    );
}

export default Dashboard;