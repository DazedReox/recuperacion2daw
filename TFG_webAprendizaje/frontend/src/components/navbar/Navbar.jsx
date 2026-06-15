import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {

    const { user } = useAuth();

    return (

        <nav className="navbar">

            <Link
                to="/"
                className="navbar-logo"
            >
                LearnQuest
            </Link>

            <div className="flex items-center gap-6">

                <Link to="/courses" className="navbar-link">
                    Cursos
                </Link>

                <Link to="/tests" className="navbar-link">
                    Tests
                </Link>

                <Link to="/ranking" className="navbar-link">
                    Ranking
                </Link>

                <Link to="/statistics" className="navbar-link">
                    Estadísticas
                </Link>

                {user ? (

                    <Link to="/dashboard" className="btn-primary">
                        Dashboard
                    </Link>

                ) : (

                    <Link to="/login" className="btn-secondary">
                        Login
                    </Link>

                )}

            </div>

        </nav>
    );
}

export default Navbar;