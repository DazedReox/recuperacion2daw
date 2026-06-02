import MainLayout from "../../layouts/MainLayout";

function CourseDetail() {

    return (
        <MainLayout>

            <h1 className="text-3xl font-bold mb-4">
                JavaScript
            </h1>

            <div className="bg-white rounded-lg shadow p-5">

                <ul className="space-y-3">

                    <li>Variables</li>
                    <li>Funciones</li>
                    <li>Arrays</li>
                    <li>Objetos</li>
                    <li>DOM</li>

                </ul>

            </div>

        </MainLayout>
    );
}

export default CourseDetail;