import React from "react";
import { useEffect, useState } from "react";
import { getPokemonById } from "../pokemonService";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../AuthContext";
import Ranking from "../components/Ranking";


function Game() {
  const [pokemon, setPokemon] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  const TOTAL_ROUNDS = 5;

  useEffect(() => {
    loadRound();
  }, []);

  async function loadRound() {
    setMessage("");

    const randomId = Math.floor(Math.random() * 151) + 1;
    const correctPokemon = await getPokemonById(randomId);

    const wrongOptions = [];
    while (wrongOptions.length < 3) {
      const wrongId = Math.floor(Math.random() * 151) + 1;
      if (wrongId !== randomId) {
        const wrongPokemon = await getPokemonById(wrongId);
        wrongOptions.push(wrongPokemon.name);
      }
    }

    const allOptions = [
      correctPokemon.name,
      ...wrongOptions,
    ].sort(() => Math.random() - 0.5);

    setPokemon(correctPokemon);
    setOptions(allOptions);
  }

  function handleAnswer(answer) {
    if (answer === pokemon.name) {
      setScore(score + 10);
      setMessage("Correcto!");
    } else {
      setMessage("Incorrecto");
    }

    if (round < TOTAL_ROUNDS) {
      setTimeout(() => {
        setRound(round + 1);
        loadRound();
      }, 1000);
    }
  }

  if (!pokemon) return <p>Cargando juego...</p>;

  if (round > TOTAL_ROUNDS) {

  async function saveScore() {
    if (!user) return;

    try {
      await addDoc(collection(db, "rankings"), {
        username: user.email,
        score: score,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error guardando puntuación", error);
    }
  }

  saveScore();

  return (
    <div>
      <h2>Juego terminado</h2>
      <p>Puntuación final: {score}</p>

      <button onClick={() => window.location.reload()}>
        Volver a jugar
      </button>

      <hr />

      <Ranking />
    </div>
  );
}



  return (
    <div>
      <h2>Ronda {round} de {TOTAL_ROUNDS}</h2>

      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Tipo:</strong> {pokemon.types[0].type.name}</p>

      <div>
        {options.map((option) => (
            <button key={option}onClick={() => handleAnswer(option)}> {option} </button>
        ))}
        </div>
        
        <p>{message}</p>
        <p>Puntuación: {score}</p>
        <button onClick={() => window.location.reload()}> Volver a jugar </button>
    </div>
    
  );
}

export default Game;