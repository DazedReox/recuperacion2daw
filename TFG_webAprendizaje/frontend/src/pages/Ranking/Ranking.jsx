import {
    useEffect,
    useState
} from "react";

import MainLayout
from "../../layouts/MainLayout";

import rankingService
from "../../services/rankingService";

function Ranking() {

    const [users, setUsers] =
        useState([]);

    useEffect(() => {

        loadRanking();

    }, []);

    const loadRanking =
        async () => {

            const data =
                await rankingService
                    .getRanking();

            setUsers(data);
        };

    const rankBadgeClass = (position) => {

        if (position === 1) return "badge-rank-1";
        if (position === 2) return "badge-rank-2";
        if (position === 3) return "badge-rank-3";

        return "badge-level";
    };

    return (

        <MainLayout>

            <div className="page-container">

                <h1 className="section-title">

                    Ranking Global

                </h1>

                <div className="space-y-3">

                    {users.map(
                        (
                            user,
                            index
                        ) => (

                            <div
                                key={user.id}
                                className="card flex items-center justify-between"
                            >

                                <div className="flex items-center gap-4">

                                    <span className={rankBadgeClass(index + 1)}>
                                        #{index + 1}
                                    </span>

                                    <span className="font-semibold text-slate-800">
                                        {user.username}
                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <span className="badge-level">
                                        Nivel {user.level}
                                    </span>

                                    <span className="badge-xp">
                                        {user.xp} XP
                                    </span>

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </MainLayout>
    );
}

export default Ranking;
