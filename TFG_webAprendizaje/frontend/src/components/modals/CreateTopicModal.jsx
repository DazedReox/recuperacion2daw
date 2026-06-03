import { useState } from "react";

function CreateTopicModal({
    isOpen,
    onClose,
    onSubmit
}) {

    const [title, setTitle] =
        useState("");

    if (!isOpen) return null;

    const handleSubmit = e => {

        e.preventDefault();

        onSubmit({
            title
        });

        setTitle("");
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

            <div className="bg-white p-6 rounded-lg w-full max-w-lg">

                <h2 className="text-xl font-bold mb-4">
                    Nuevo Tema
                </h2>

                <form
                    onSubmit={handleSubmit}
                >

                    <input
                        value={title}
                        onChange={e =>
                            setTitle(
                                e.target.value
                            )
                        }
                        placeholder="Título"
                        className="w-full border p-2 rounded"
                    />

                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded mt-4"
                    >
                        Guardar
                    </button>

                </form>

            </div>

        </div>
    );
}

export default CreateTopicModal;