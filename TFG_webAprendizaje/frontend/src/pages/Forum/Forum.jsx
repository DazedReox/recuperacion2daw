import MainLayout from "../../layouts/MainLayout";

function Forum() {

    return (
        <MainLayout>

            <div className="flex justify-between mb-5">

                <h1 className="text-3xl font-bold">
                    Foro
                </h1>

                <button
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Nueva publicación
                </button>

            </div>

            <div className="space-y-4">

                <div className="bg-white p-5 rounded shadow">

                    <h2 className="font-bold">
                        ¿Cómo funciona JOIN en SQL?
                    </h2>

                    <p className="text-sm text-gray-500">
                        Publicado por Juan
                    </p>

                </div>

            </div>

        </MainLayout>
    );
}

export default Forum;