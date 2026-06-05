import MainLayout from "../../layouts/MainLayout";

function Achievements() {

    return (
        <MainLayout>

            <h1 className="text-3xl font-bold mb-6">
                Logros
            </h1>

            <div className="grid md:grid-cols-3 gap-4">

                <div className="bg-white p-5 rounded shadow">
                    🏆 Primer Test
                </div>

                <div className="bg-white p-5 rounded shadow">
                    ⭐ Nivel 5
                </div>

                <div className="bg-white p-5 rounded shadow">
                    🔥 7 días seguidos
                </div>

            </div>

        </MainLayout>
    );
}

export default Achievements;