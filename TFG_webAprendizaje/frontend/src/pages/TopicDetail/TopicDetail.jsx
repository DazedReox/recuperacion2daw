import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import contentService from "../../services/contentService";

function TopicDetail() {

    const { id } =
        useParams();

    const [contents, setContents] =
        useState([]);

    useEffect(() => {

        loadContents();

    }, []);

    const loadContents =
        async () => {
            const data =
                await contentService.getByTopic(
                    id
                );
            setContents(data);
        };

    return (
        <MainLayout>
            <div className="page-container">
                <h1 className="section-title">
                    Contenido del tema
                </h1>
                <div className="space-y-6">
                    {contents.map(content => (
                        <div
                            key={content.id}
                            className="card"
                        >
                            <h2 className="card-title">
                                {content.title}
                            </h2>
                            <div
                                className="prose max-w-none text-slate-600"
                                dangerouslySetInnerHTML={{
                                    __html: content.content
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default TopicDetail;
