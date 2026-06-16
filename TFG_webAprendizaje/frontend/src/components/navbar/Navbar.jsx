import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        if (logout) logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                LearnQuest
            </Link>
            {user?.role === "admin" && (
                <Link 
                    to="/admin" 
                    style={{
                        backgroundColor: "#d97706",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        marginLeft: "15px",
                        textDecoration: "none"
                    }}
                >
                    Admin
                </Link>
            )}
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
                    <div className="flex items-center gap-3" style={{ display: "inline-flex" }}>
                        <Link to="/dashboard" className="btn-primary">
                            Dashboard
                        </Link>
                        
                        <button 
                            onClick={handleLogout}
                            className="navbar-link"
                            style={{
                                background: "none",
                                border: "1px solid #cbd5e1",
                                padding: "6px 12px",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}
                        >
                            Log Out
                        </button>
                    </div>
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