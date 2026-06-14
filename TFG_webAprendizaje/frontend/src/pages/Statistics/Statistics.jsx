import {
    useEffect,
    useState
} from "react";

import MainLayout
from "../../layouts/MainLayout";

import statisticsService
from "../../services/statisticsService";

function Statistics() {

    const [stats, setStats] =
        useState(null);

    useEffect(() => {

        loadStats();

    }, []);

    const loadStats =
        async () => {

            const data =
                await statisticsService
                    .getMyStats();

            setStats(data);
        };

    if (!stats)
        return (
            <MainLayout>
                <p>Cargando...</p>
            </MainLayout>
        );

    return (

        <MainLayout>

            <h1 className="text-3xl font-bold mb-6">

                Estadísticas

            </h1>

            <div className="grid md:grid-cols-4 gap-4">

                <div className="bg-white p-5 rounded shadow">

                    <h3 className="font-bold">
                        Nivel
                    </h3>

                    <p>
                        {stats.level}
                    </p>

                </div>

                <div className="bg-white p-5 rounded shadow">

                    <h3 className="font-bold">
                        XP Total
                    </h3>

                    <p>
                        {stats.xp}
                    </p>

                </div>

                <div className="bg-white p-5 rounded shadow">

                    <h3 className="font-bold">
                        Tests realizados
                    </h3>

                    <p>
                        {stats.tests_completed}
                    </p>

                </div>

                <div className="bg-white p-5 rounded shadow">

                    <h3 className="font-bold">
                        % Aciertos
                    </h3>

                    <p>
                        {Math.round(
                            stats.success_rate || 0
                        )}
                        %
                    </p>

                </div>

            </div>

        </MainLayout>
    );
}

export default Statistics;