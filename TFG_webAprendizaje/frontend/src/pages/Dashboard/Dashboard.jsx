import MainLayout from "../../layouts/MainLayout";

function Dashboard() {

    return (
        <MainLayout>

            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                <div className="bg-white p-4 rounded shadow">
                    XP Total
                </div>

                <div className="bg-white p-4 rounded shadow">
                    Cursos
                </div>

                <div className="bg-white p-4 rounded shadow">
                    Logros
                </div>

            </div>

        </MainLayout>
    );
}

export default Dashboard;