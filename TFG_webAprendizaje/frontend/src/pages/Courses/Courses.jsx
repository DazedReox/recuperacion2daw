import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import coursesService from "../../services/courseService";

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
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                Cursos
            </h1>
            <div className="grid md:grid-cols-3 gap-4">
                {courses.map(course => (
                    <Link
                        key={course.id}
                        to={`/courses/${course.id}`}
                    >
                        <div className="bg-white shadow rounded p-4">
                            <h2 className="font-bold">
                                {course.title}
                            </h2>
                            <p>
                                {course.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Courses;