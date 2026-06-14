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

    return (

        <MainLayout>

            <h1 className="text-3xl font-bold mb-6">

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
                            className="
                                bg-white
                                shadow
                                rounded
                                p-4
                            "
                        >

                            <strong>

                                #{index + 1}

                            </strong>

                            {" "}
                            {user.username}

                            {" - "}

                            Nivel {user.level}

                            {" - "}

                            {user.xp} XP

                        </div>

                    )
                )}

            </div>

        </MainLayout>
    );
}

export default Ranking;