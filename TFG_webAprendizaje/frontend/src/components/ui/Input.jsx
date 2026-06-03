function Input({
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    name
}) {

    return (
        <div>

            {label && (
                <label className="block mb-2 font-medium">
                    {label}
                </label>
            )}

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border rounded p-2"
            />

        </div>
    );
}

export default Input;