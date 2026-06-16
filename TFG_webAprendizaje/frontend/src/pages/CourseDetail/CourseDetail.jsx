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
                <div className="page-container">
                    <p className="loading-state">Cargando...</p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="page-container">
                <div className="banner-gradient">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        {course.title}
                    </h1>
                    <p className="mt-3 text-indigo-100">
                        {course.description}
                    </p>
                </div>
                <h2 className="section-title">
                    Temas
                </h2>
                <div className="space-y-3">
                    {topics.map(topic => (
                        <div
                            key={topic.id}
                            className="card"
                        >
                            <h3 className="card-title mb-1">
                                <Link
                                    to={`/topics/${topic.id}`}
                                    className="hover:text-indigo-600 transition-colors"
                                >
                                    {topic.title}
                                </Link>
                            </h3>
                            <p className="text-slate-500 text-sm">
                                {topic.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default CourseDetail;
