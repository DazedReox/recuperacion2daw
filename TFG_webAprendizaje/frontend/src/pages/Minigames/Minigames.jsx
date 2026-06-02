import MainLayout from "../../layouts/MainLayout";

function Minigames() {

    return (
        <MainLayout>

            <h1 className="text-3xl font-bold mb-6">
                Minijuegos
            </h1>

            <div className="grid md:grid-cols-2 gap-5">

                <div className="bg-white rounded-lg shadow p-5">

                    <h2 className="font-bold mb-2">
                        Quiz Rápido
                    </h2>

                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded"
                    >
                        Jugar
                    </button>

                </div>

                <div className="bg-white rounded-lg shadow p-5">

                    <h2 className="font-bold mb-2">
                        Memory Técnico
                    </h2>

                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded"
                    >
                        Jugar
                    </button>

                </div>

            </div>

        </MainLayout>
    );
}

export default Minigames;