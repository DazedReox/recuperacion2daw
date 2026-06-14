import {useEffect, useState} from "react";
import AdminLayout from "../../layouts/AdminLayout";
import adminService from "../../services/adminService";

function AdminPanel() {

    const [stats, setStats] =
        useState(null);

    const [users, setUsers] =
        useState([]);

    useEffect(() => {

        loadData();

    }, []);

    const loadData =
        async () => {

            const dashboard =
                await adminService
                    .getDashboardStats();

            const usersData =
                await adminService
                    .getUsers();

            setStats(dashboard);
            setUsers(usersData);
        };

    if (!stats)
        return <p>Cargando...</p>;

    return (

        <AdminLayout>

            <h1 className="text-3xl font-bold mb-6">

                Panel Administración

            </h1>

            <div className="grid grid-cols-4 gap-4 mb-8">

                <div className="bg-white p-4 rounded shadow">
                    Usuarios:
                    {" "}
                    {stats.users}
                </div>

                <div className="bg-white p-4 rounded shadow">
                    Cursos:
                    {" "}
                    {stats.courses}
                </div>

                <div className="bg-white p-4 rounded shadow">
                    Tests:
                    {" "}
                    {stats.tests}
                </div>

                <div className="bg-white p-4 rounded shadow">
                    Posts:
                    {" "}
                    {stats.posts}
                </div>

            </div>

            <h2 className="text-xl font-bold mb-4">

                Usuarios

            </h2>

            <table className="w-full bg-white shadow rounded">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Nivel</th>
                        <th>XP</th>

                    </tr>

                </thead>

                <tbody>

                    {users.map(user => (

                        <tr key={user.id}>

                            <td>{user.id}</td>

                            <td>{user.username}</td>

                            <td>{user.email}</td>

                            <td>{user.level}</td>

                            <td>{user.xp}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </AdminLayout>
    );
}

export default AdminPanel;