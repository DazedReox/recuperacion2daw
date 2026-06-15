import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

function Home() {

    return (
        <MainLayout>

            <section className="text-center py-20">

                <h1 className="text-6xl font-bold mb-6">
                    LearnQuest
                </h1>

                <p className="text-xl text-slate-600 mb-8">
                    Aprende programación de forma gamificada,
                    completa cursos, supera tests y gana experiencia.
                </p>

                <div className="flex justify-center gap-4">

                    <Link
                        to="/register"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
                    >
                        Empezar Gratis
                    </Link>

                    <Link
                        to="/courses"
                        className="border px-6 py-3 rounded-lg"
                    >
                        Ver Cursos
                    </Link>

                </div>

            </section>

            <section className="grid md:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold text-xl mb-3">
                        Cursos
                    </h3>

                    <p>
                        Aprende HTML, CSS, JavaScript,
                        React y SQL.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold text-xl mb-3">
                        Tests
                    </h3>

                    <p>
                        Evalúa tus conocimientos
                        y mejora tus resultados.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold text-xl mb-3">
                        Ranking
                    </h3>

                    <p>
                        Compite con otros estudiantes
                        y sube posiciones.
                    </p>
                </div>

            </section>

        </MainLayout>
    );
}

export default Home;