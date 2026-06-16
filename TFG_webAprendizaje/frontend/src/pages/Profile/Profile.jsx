import MainLayout from "../../layouts/MainLayout";

function Profile() {

    return (
        <MainLayout>
            <div className="page-container max-w-2xl">
                <h1 className="section-title">
                    Mi Perfil
                </h1>
                <div className="card space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-slate-500 text-sm">Usuario</span>
                        <span className="font-semibold text-slate-800">alumno01</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-slate-500 text-sm">Email</span>
                        <span className="font-semibold text-slate-800">alumno@email.com</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-slate-500 text-sm">Nivel</span>
                        <span className="badge-level">Nivel 4</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-sm">XP</span>
                        <span className="badge-xp">720 XP</span>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Profile;
