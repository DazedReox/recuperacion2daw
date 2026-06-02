import { useState } from "react";

function PostForm({ onSubmit }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit({
            title,
            content
        });

        setTitle("");
        setContent("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >

            <input
                placeholder="Título"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                className="w-full border p-2 rounded"
            />

            <textarea
                placeholder="Contenido"
                value={content}
                onChange={(e) =>
                    setContent(e.target.value)
                }
                className="w-full border p-2 rounded"
            />

            <button
                className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
                Publicar
            </button>

        </form>
    );
}

export default PostForm;