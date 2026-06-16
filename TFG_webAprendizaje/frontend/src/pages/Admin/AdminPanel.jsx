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
        return (
            <AdminLayout>
                <div className="page-container">
                    <p className="loading-state">Cargando...</p>
                </div>
            </AdminLayout>
        );

    return (
        <AdminLayout>
            <div className="page-container">
                <h1 className="section-title">
                    Panel Administración
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="stat-card">
                        <p className="stat-label">Usuarios</p>
                        <p className="stat-value">{stats.users}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">Cursos</p>
                        <p className="stat-value">{stats.courses}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">Tests</p>
                        <p className="stat-value">{stats.tests}</p>
                    </div>
                </div>
                <h2 className="section-title">
                    Usuarios
                </h2>
                <div className="table-card">
                    <table className="table-base">
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
                                    <td className="font-medium text-slate-800">{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className="badge-level">Nivel {user.level}</span>
                                    </td>
                                    <td>
                                        <span className="badge-xp">{user.xp} XP</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminPanel;
