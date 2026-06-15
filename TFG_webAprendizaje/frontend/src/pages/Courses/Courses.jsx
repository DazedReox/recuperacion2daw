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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {courses.map(course => (

                <Link
                    key={course.id}
                    to={`/courses/${course.id}`}
                >

                    <div
                        className="
                            bg-white
                            rounded-xl
                            shadow-md
                            hover:shadow-xl
                            transition
                            p-6
                            border
                            h-full"
                    >

                        <h2 className="font-bold text-xl mb-3">
                            {course.title}
                        </h2>

                        <p className="text-slate-600 mb-4">
                            {course.description}
                        </p>

                        <span
                            className="
                                inline-block
                                bg-indigo-600
                                text-white
                                px-4
                                py-2
                                rounded"
                        >
                            Ver curso
                        </span>

                    </div>

                </Link>

            ))}

        </div>

    </div>
);
}

export default Courses;