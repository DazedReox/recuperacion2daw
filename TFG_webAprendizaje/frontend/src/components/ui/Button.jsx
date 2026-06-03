function Button({
    children,
    type = "button",
    variant = "primary",
    onClick,
    disabled = false
}) {

    const variants = {
        primary:
            "bg-indigo-600 hover:bg-indigo-700 text-white",
        success:
            "bg-green-600 hover:bg-green-700 text-white",
        danger:
            "bg-red-600 hover:bg-red-700 text-white",
        secondary:
            "bg-slate-600 hover:bg-slate-700 text-white"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded transition ${variants[variant]}`}
        >
            {children}
        </button>
    );
}

export default Button;