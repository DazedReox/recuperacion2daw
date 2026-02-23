import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonById } from "../pokemonService";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      const data = await getPokemonById(id);
      setPokemon(data);
    }

    loadPokemon();
  }, [id]);

  if (!pokemon) return <p>Cargando detalle...</p>;

  return (
    <div className="container">
      <div className="content-box">
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>

      <p><strong>Tipos:</strong></p>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default PokemonDetail;