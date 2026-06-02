function AchievementCard({ achievement }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-5">

            <div className="text-4xl mb-3">
                {achievement.icon}
            </div>

            <h2 className="font-bold text-lg">
                {achievement.title}
            </h2>

            <p className="text-gray-500">
                {achievement.description}
            </p>

        </div>
    );
}

export default AchievementCard;