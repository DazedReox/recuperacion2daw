import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function Ranking() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getRanking = async () => {
      const q = query(
        collection(db, "ranking"),
        orderBy("score", "desc")
      );

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setScores(data);
    };

    getRanking();
  }, []);

  return (
    <div className="container-center">
      <div className="content-box">
        <h1>Ranking</h1>

        {scores.length === 0 ? (
          <p>No hay puntuaciones todavía.</p>
        ) : (
          scores.map((item, index) => (
            <p key={item.id}>
              {index + 1}. {item.name} - {item.score}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default Ranking;