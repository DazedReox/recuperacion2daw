import { Link } from "react-router-dom";

function CourseCard({ course }) {
    return (
        <div className="card flex flex-col">

            <h2 className="card-title">
                {course.title}
            </h2>

            <p className="card-subtitle">
                {course.description}
            </p>

            <span className="badge-level mb-4 self-start">
                {course.topics} temas
            </span>

            <Link
                to={`/courses/${course.id}`}
                className="btn-primary mt-auto text-center"
            >
                Ver Curso
            </Link>

        </div>
    );
}

export default CourseCard;