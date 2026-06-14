import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {

    const { user } =
        useAuth();

    return (

        <nav className="bg-indigo-600 text-white px-6 py-4">

            <div className="container mx-auto flex justify-between items-center">

                <h1 className="font-bold text-xl">
                    LearnQuest
                </h1>

                <div className="flex gap-4">

                    <Link to="/">
                        Inicio
                    </Link>

                    {user && (
                        <>
                            <Link to="/dashboard">
                                Dashboard
                            </Link>

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

                            <Link to="/profile">
                                Perfil
                            </Link>

                            {user.role === "admin" && (
                                <Link to="/admin">
                                    Admin
                                </Link>
                            )}
                        </>
                    )}

                    {!user && (
                        <>
                            <Link to="/login">
                                Login
                            </Link>

                            <Link to="/register">
                                Registro
                            </Link>
                        </>
                    )}

                </div>

            </div>

        </nav>
    );
}

export default Navbar;