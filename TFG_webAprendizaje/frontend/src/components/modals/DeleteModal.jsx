function DeleteModal({
    isOpen,
    onClose,
    onConfirm
}) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

            <div className="bg-white p-6 rounded-lg">

                <h2 className="font-bold text-xl mb-4">
                    Confirmar eliminación
                </h2>

                <p className="mb-4">
                    Esta acción no se puede deshacer.
                </p>

                <div className="flex gap-4">

                    <button
                        onClick={onConfirm}
                        className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Eliminar
                    </button>

                    <button
                        onClick={onClose}
                        className="bg-gray-300 px-4 py-2 rounded"
                    >
                        Cancelar
                    </button>

                </div>

            </div>

        </div>
    );
}

export default DeleteModal;