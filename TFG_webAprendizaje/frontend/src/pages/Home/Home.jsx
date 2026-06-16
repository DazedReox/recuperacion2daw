import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

function Home() {

    return (
        <MainLayout>
            <div className="page-container">
                <section className="hero">
                    <h1 className="hero-title">
                        LearnQuest
                    </h1>
                    <p className="hero-subtitle">
                        Aprende programación de forma gamificada,
                        completa cursos, supera tests y gana experiencia.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/register"
                            className="btn-primary"
                        >
                            Empezar Gratis
                        </Link>
                        <Link
                            to="/courses"
                            className="btn-secondary"
                        >
                            Ver Cursos
                        </Link>
                    </div>
                </section>
                <section className="grid-cards">
                    <div className="card">
                        <h3 className="card-title">
                            Cursos
                        </h3>
                        <p className="card-subtitle">
                            Aprende HTML, CSS, JavaScript,
                            React y SQL.
                        </p>
                    </div>
                    <div className="card">
                        <h3 className="card-title">
                            Tests
                        </h3>
                        <p className="card-subtitle">
                            Evalúa tus conocimientos
                            y mejora tus resultados.
                        </p>
                    </div>
                    <div className="card">
                        <h3 className="card-title">
                            Ranking
                        </h3>
                        <p className="card-subtitle">
                            Compite con otros estudiantes
                            y sube posiciones.
                        </p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}

export default Home;