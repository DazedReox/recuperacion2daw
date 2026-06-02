import MainLayout from "../../layouts/MainLayout";

function Profile() {

    return (
        <MainLayout>

            <div className="bg-white rounded-lg shadow p-6">

                <h1 className="text-3xl font-bold mb-4">
                    Mi Perfil
                </h1>

                <p>Usuario: alumno01</p>

                <p>Email: alumno@email.com</p>

                <p>Nivel: 4</p>

                <p>XP: 720</p>

            </div>

        </MainLayout>
    );
}

export default Profile;