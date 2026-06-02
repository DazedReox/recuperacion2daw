import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="bg-indigo-600 text-white px-6 py-4">

            <div className="container mx-auto flex justify-between">

                <h1 className="font-bold text-xl">
                    LearnQuest
                </h1>

                <div className="flex gap-4">

                    <Link to="/">
                        Inicio
                    </Link>

                    <Link to="/dashboard">
                        Dashboard
                    </Link>

                    <Link to="/login">
                        Login
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;