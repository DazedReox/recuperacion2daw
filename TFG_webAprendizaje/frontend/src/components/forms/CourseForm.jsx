import { useState } from "react";

function CourseForm({ onSubmit }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit({
            title,
            description
        });
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
                placeholder="Descripción"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
                className="w-full border p-2 rounded"
            />

            <button
                className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
                Guardar
            </button>

        </form>
    );
}

export default CourseForm;