import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Sidebar() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <aside className="w-64 bg-slate-800 text-white p-5 flex flex-col justify-between min-h-screen">
            <div>
                <h2 className="text-xl font-bold mb-6 text-slate-300 tracking-wide border-b border-slate-700 pb-3">
                     Administración
                </h2>

                <ul className="space-y-4">
                    <li>
                        <Link to="/admin" className="block p-2 hover:bg-slate-700 rounded transition-colors text-slate-100 font-medium">
                             Dashboard Admin
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/users" className="block p-2 hover:bg-slate-700 rounded transition-colors text-slate-300">
                             Usuarios
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/courses" className="block p-2 hover:bg-slate-700 rounded transition-colors text-slate-300">
                             Cursos
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/tests" className="block p-2 hover:bg-slate-700 rounded transition-colors text-slate-300">
                             Tests
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="border-t border-slate-700 pt-4 space-y-2">
                <Link 
                    to="/dashboard" 
                    className="block w-full text-center p-2 bg-indigo-600 hover:bg-indigo-700 rounded font-semibold text-sm transition-colors text-white"
                >
                     Vista de Alumno
                </Link>
                
                <button 
                    onClick={handleLogout}
                    className="w-full text-center p-2 bg-red-900/40 hover:bg-red-900/60 border border-red-700/50 text-red-200 rounded font-medium text-sm transition-colors"
                >
                     Cerrar Sesión
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;