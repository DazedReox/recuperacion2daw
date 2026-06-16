import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import statisticsService from "../../services/statisticsService";

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
                <div className="page-container">
                    <p className="loading-state">Cargando...</p>
                </div>
            </MainLayout>
        );

    return (
        <MainLayout>
            <div className="page-container">
                <h1 className="section-title">
                    Estadísticas
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="stat-card">
                        <p className="stat-label">
                            Nivel
                        </p>
                        <p className="stat-value">
                            {stats.level}
                        </p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">
                            XP Total
                        </p>
                        <p className="stat-value">
                            {stats.xp}
                        </p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">
                            Horas de estudio
                        </p>
                        <p className="stat-value">
                            {stats.study_hours}
                        </p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">
                            Tests realizados
                        </p>
                        <p className="stat-value">
                            {stats.tests_completed}
                        </p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">
                            % Aciertos
                        </p>
                        <p className="stat-value">
                            {Math.round(
                                stats.success_rate || 0
                            )}
                            %
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Statistics;
