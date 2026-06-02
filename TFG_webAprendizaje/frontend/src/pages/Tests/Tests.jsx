import MainLayout from "../../layouts/MainLayout";

function Tests() {

    return (
        <MainLayout>

            <h1 className="text-3xl font-bold mb-6">
                Cuestionarios
            </h1>

            <div className="bg-white p-5 rounded shadow">

                <h2 className="font-bold mb-4">
                    Test HTML Básico
                </h2>

                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded"
                >
                    Comenzar
                </button>

            </div>

        </MainLayout>
    );
}

export default Tests;