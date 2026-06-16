import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import coursesService from "../../services/courseService";
import MainLayout from "../../layouts/MainLayout";

function Courses() {
    const [courses, setCourses] =
        useState([]);
    useEffect(() => {
        loadCourses();
    }, []);
    const loadCourses = async () => {

        const data =
            await coursesService
                .getCourses();

        setCourses(data);
    };
    return (
    <MainLayout>
    <div className="page-container">
        <h1 className="section-title">
            Cursos
        </h1>
        <div className="grid-cards">
            {courses.map(course => (
                <Link
                    key={course.id}
                    to={`/courses/${course.id}`}
                    className="card flex flex-col h-full"
                >
                    <h2 className="card-title">
                        {course.title}
                    </h2>
                    <p className="card-subtitle flex-1">
                        {course.description}
                    </p>
                    <span className="btn-primary mt-2 text-center">
                        Ver curso
                    </span>
                </Link>
            ))}
        </div>
    </div>
    </MainLayout>
);
}

export default Courses;
