import React from "react";
import { useEffect, useState } from "react";
import { getPokemons } from "../pokemonService";
import PokemonCard from "../components/PokemonCard";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await getPokemons(30);
      setPokemons(data);
      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) return <p>Cargando Pokemons...</p>;

  return (
    <div>
      <h2>Lista de Pokemons</h2>
      <div className="pokemon-grid">
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            id={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokemons;