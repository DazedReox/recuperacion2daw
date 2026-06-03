function Alert({
    message,
    type = "success"
}) {

    const styles = {
        success:
            "bg-green-100 text-green-800",
        error:
            "bg-red-100 text-red-800",
        warning:
            "bg-yellow-100 text-yellow-800"
    };

    return (
        <div
            className={`
                p-4 rounded mb-4
                ${styles[type]}
            `}
        >
            {message}
        </div>
    );
}

export default Alert;