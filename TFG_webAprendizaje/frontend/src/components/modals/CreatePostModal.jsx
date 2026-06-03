import PostForm from "../forms/PostForm";

function CreatePostModal({
    isOpen,
    onClose,
    onSubmit
}) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

            <div className="bg-white p-6 rounded-lg w-full max-w-lg">

                <h2 className="font-bold text-xl mb-4">
                    Nueva Publicación
                </h2>

                <PostForm
                    onSubmit={onSubmit}
                />

                <button
                    onClick={onClose}
                    className="mt-4"
                >
                    Cerrar
                </button>

            </div>

        </div>
    );
}

export default CreatePostModal;