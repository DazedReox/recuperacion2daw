import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  const limit = 20;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`)
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results);
      });
  }, [page]);

  return (
    <div className="container-pokemons">
      <h1>Lista de Pokémons</h1>

      <div className="pokemon-grid">
        {pokemons.map((pokemon, index) => {
          const id = page * limit + index + 1;

          return (
            <div key={pokemon.name} className="pokemon-card">
              <h3>{pokemon.name.toUpperCase()}</h3>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={pokemon.name}
              />
              <PokemonCard
                name={pokemon.name.toUpperCase()}
              />
            </div>
          );
        })}
      </div>

      <div className="pagination">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>

        <span>Página {page + 1}</span>

        <button onClick={() => setPage(page + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Pokemons;