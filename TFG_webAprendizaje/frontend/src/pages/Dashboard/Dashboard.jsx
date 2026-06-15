import { useAuth } from "../../hooks/useAuth";

function Dashboard() {

    const { user } = useAuth();

    const progress = (user?.xp ?? 0) % 1000;

    return (

        <div className="page-container">

            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                Bienvenido, {user?.username}
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="stat-card-accent-primary">
                    <h3 className="font-semibold text-indigo-100">
                        Nivel
                    </h3>
                    <p className="text-4xl font-bold mt-2">
                        {user?.level}
                    </p>
                </div>

                <div className="stat-card-accent-success">
                    <h3 className="font-semibold text-emerald-100">
                        XP Total
                    </h3>
                    <p className="text-4xl font-bold mt-2">
                        {user?.xp}
                    </p>
                </div>

                <div className="stat-card-accent-dark">
                    <h3 className="font-semibold text-slate-300">
                        Progreso
                    </h3>
                    <p className="text-4xl font-bold mt-2 mb-3">
                        {progress}/1000
                    </p>
                    <div className="progress-track-light">
                        <div
                            className="progress-fill-light"
                            style={{ width: `${(progress / 1000) * 100}%` }}
                        />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;
