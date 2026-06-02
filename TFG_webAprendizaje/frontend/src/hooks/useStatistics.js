import { useEffect, useState } from "react";

const useStatistics = () => {

    const [statistics, setStatistics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchStatistics = async () => {
            try {

                const response = await fetch(
                    "http://localhost:3000/api/statistics"
                );

                const data = await response.json();

                setStatistics(data);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStatistics();

    }, []);

    return {
        statistics,
        loading
    };
};

export default useStatistics;