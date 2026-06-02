import MainLayout from "../../layouts/MainLayout";

function Statistics() {

    return (
        <MainLayout>

            <h1 className="text-3xl font-bold mb-6">
                Estadísticas
            </h1>

            <div className="grid md:grid-cols-4 gap-4">

                <div className="bg-white p-5 rounded shadow">
                    Horas estudiadas
                </div>

                <div className="bg-white p-5 rounded shadow">
                    Tests realizados
                </div>

                <div className="bg-white p-5 rounded shadow">
                    % Aciertos
                </div>

                <div className="bg-white p-5 rounded shadow">
                    XP Total
                </div>

            </div>

        </MainLayout>
    );
}

export default Statistics;