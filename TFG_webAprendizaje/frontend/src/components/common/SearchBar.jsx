function SearchBar({
    value,
    onChange,
    placeholder = "Buscar..."
}) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border rounded p-2"
        />
    );
}

export default SearchBar;