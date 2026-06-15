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

            <h1 className="text-3xl font-bold mb-6">

                Contenido del tema

            </h1>

            {contents.map(content => (

                <div
                    key={content.id}
                    className="
                        bg-white
                        rounded-xl
                        shadow-lg
                        p-8
                        mb-6">
                    
                    <h2 className="text-xl font-bold mb-3">

                        {content.title}

                    </h2>
                    <div
                        className="
                            prose
                            max-w-none
                            mt-4"
                        
                        dangerouslySetInnerHTML={{
                            __html: content.content
                        }}
                    />
                </div>

            ))}

        </MainLayout>
    );
}

export default TopicDetail;