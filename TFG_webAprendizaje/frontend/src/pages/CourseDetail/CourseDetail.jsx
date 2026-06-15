import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import courseService from "../../services/courseService";
import topicService from "../../services/topicService";

function CourseDetail() {

    const { id } = useParams();

    const [course, setCourse] =
        useState(null);

    const [topics, setTopics] =
        useState([]);

    useEffect(() => {

        loadData();

    }, [id]);

    const loadData = async () => {

    try {

        const courseData =
            await courseService.getCourseById(id);

        const topicsData =
            await topicService.getTopicsByCourse(id);

        console.log(courseData);
        console.log(topicsData);

        setCourse(courseData);
        setTopics(topicsData);

    } catch (error) {

        console.error(error);

    }
};

    if (!course) {

        return (
            <MainLayout>
                <p>Cargando...</p>
            </MainLayout>
        );
    }

    return (

        <MainLayout>
            <div
                className="
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                    text-white
                    p-8
                    rounded-xl
                    mb-6">
                <h1 className="text-4xl font-bold">
                    {course.title}
                </h1>

                <p className="mt-3">
                    {course.description}
                </p>
            </div>

            <h2 className="text-xl font-bold mt-6 mb-3">

                Temas

            </h2>

            <div className="space-y-3">

                {topics.map(topic => (

                    <div
                        key={topic.id}
                        className="bg-white shadow rounded p-3"
                    >

                        <h3 className="font-semibold">

                            <Link
                                to={`/topics/${topic.id}`}
                            >
                                {topic.title}
                            </Link>

                        </h3>

                        <p>

                            {topic.description}

                        </p>

                    </div>

                ))}

            </div>

        </MainLayout>
    );
}

export default CourseDetail;
