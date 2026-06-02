import { Link } from "react-router-dom";

function CourseCard({ course }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-5">

            <h2 className="text-xl font-bold mb-2">
                {course.title}
            </h2>

            <p className="text-gray-500 mb-4">
                {course.description}
            </p>

            <p className="mb-4">
                Temas: {course.topics}
            </p>

            <Link
                to={`/courses/${course.id}`}
                className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
                Ver Curso
            </Link>

        </div>
    );
}

export default CourseCard;