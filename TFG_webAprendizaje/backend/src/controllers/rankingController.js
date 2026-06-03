import rankingService
from "../services/rankingService.js";

const getRanking = async (
    req,
    res
) => {

    const ranking =
        await rankingService.getTopUsers();

    res.json(ranking);
};

export {
    getRanking
};