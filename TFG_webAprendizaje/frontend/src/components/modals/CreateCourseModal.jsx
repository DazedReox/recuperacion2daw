import CourseForm from "../forms/CourseForm";

function CreateCourseModal({
    isOpen,
    onClose,
    onSubmit
}) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

            <div className="bg-white p-6 rounded-lg w-full max-w-lg">

                <h2 className="text-xl font-bold mb-4">
                    Crear Curso
                </h2>

                <CourseForm
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

export default CreateCourseModal;