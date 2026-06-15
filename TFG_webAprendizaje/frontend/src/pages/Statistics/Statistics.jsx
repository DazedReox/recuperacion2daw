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

            <div className="grid md:grid-cols-5 gap-4">

                <div className="bg-white rounded-xl shadow-md p-6 text-center">

                    <h3 className="font-bold">
                        Nivel
                    </h3>

                    <p className="text-4xl font-bold mt-2">
                        {stats.level}
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-md p-6 text-center">

                    <h3 className="font-bold">
                        XP Total
                    </h3>

                    <p className="text-4xl font-bold mt-2">
                        {stats.xp}
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-md p-6 text-center">

                    <h3 className="font-bold">
                        Horas de estudio
                    </h3>

                    <p className="text-4xl font-bold mt-2">
                        {stats.study_hours}
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-md p-6 text-center">

                    <h3 className="font-bold">
                        Tests realizados
                    </h3>

                    <p className="text-4xl font-bold mt-2">
                        {stats.tests_completed}
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-md p-6 text-center">

                    <h3 className="font-bold">
                        % Aciertos
                    </h3>

                    <p className="text-4xl font-bold mt-2">
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