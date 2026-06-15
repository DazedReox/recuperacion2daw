import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {

    const { user } = useAuth();

    return (

        <nav className="bg-slate-900 text-white">

            <div className="container mx-auto flex justify-between items-center px-6 py-4">

                <Link
                    to="/"
                    className="text-2xl font-bold"
                >
                    LearnQuest
                </Link>

                <div className="flex gap-6">

                    <Link to="/courses">
                        Cursos
                    </Link>

                    <Link to="/tests">
                        Tests
                    </Link>

                    <Link to="/ranking">
                        Ranking
                    </Link>

                    <Link to="/statistics">
                        Estadísticas
                    </Link>

                    {user ? (

                        <Link to="/dashboard">
                            Dashboard
                        </Link>

                    ) : (

                        <Link to="/login">
                            Login
                        </Link>

                    )}

                </div>

            </div>

        </nav>
    );
}

export default Navbar;