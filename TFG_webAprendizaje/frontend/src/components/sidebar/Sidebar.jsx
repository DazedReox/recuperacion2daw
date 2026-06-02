import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <aside className="w-64 bg-slate-800 text-white p-5">

            <h2 className="text-xl font-bold mb-5">
                Administración
            </h2>

            <ul className="space-y-3">

                <li>
                    <Link to="/admin">
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/admin/users">
                        Usuarios
                    </Link>
                </li>

                <li>
                    <Link to="/admin/courses">
                        Cursos
                    </Link>
                </li>

                <li>
                    <Link to="/admin/tests">
                        Tests
                    </Link>
                </li>

            </ul>

        </aside>
    );
}

export default Sidebar;