import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

function Ranking() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function loadRanking() {
        const q = query(
            collection(db, "rankings"),
            orderBy("score", "desc"),
            orderBy("createdAt", "asc")
        );


        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        setScores(data);
        }

    loadRanking();
  }, []);

  return (
    <div>
        <h2>Ranking</h2>

        <ul>
        {scores.map((item, index) => (
            <li key={item.id}>
                {index + 1}. {item.username} - {item.score} puntos
            </li>
        ))}
        </ul>
    </div>
  );
}

export default Ranking;