function Pagination({
    currentPage,
    totalPages,
    onPageChange
}) {

    const pages = [];

    for (
        let i = 1;
        i <= totalPages;
        i++
    ) {
        pages.push(i);
    }

    return (
        <div className="flex gap-2 mt-6">

            {pages.map(page => (

                <button
                    key={page}
                    onClick={() =>
                        onPageChange(page)
                    }
                    className={`
                        px-3 py-1 rounded
                        ${
                            page === currentPage
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-200"
                        }
                    `}
                >
                    {page}
                </button>

            ))}

        </div>
    );
}

export default Pagination;