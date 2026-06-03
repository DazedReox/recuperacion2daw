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

export default Badge;