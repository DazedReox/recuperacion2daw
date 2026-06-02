function StatCard({
    title,
    value,
    icon
}) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-5">

            <div className="flex justify-between">

                <div>
                    <h3 className="text-gray-500">
                        {title}
                    </h3>

                    <p className="text-2xl font-bold">
                        {value}
                    </p>
                </div>

                <div className="text-3xl">
                    {icon}
                </div>

            </div>

        </div>
    );
}

export default StatCard;