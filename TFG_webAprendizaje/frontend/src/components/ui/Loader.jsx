function Badge({
    text,
    color = "indigo"
}) {

    return (
        <span
            className={`
                px-3 py-1 rounded-full text-sm text-white
                bg-${color}-600
            `}
        >
            {text}
        </span>
    );
}
const colors = {
    indigo: "bg-indigo-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-500"
};

export default Badge;