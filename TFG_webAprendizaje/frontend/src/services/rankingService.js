import axios from "axios";
import { API_URL } from "../utils/constants";

const rankingService = {

    getRanking: async () => {

        const response =
            await axios.get(
                `${API_URL}/ranking`
            );

        return response.data;
    }
};

export default rankingService;