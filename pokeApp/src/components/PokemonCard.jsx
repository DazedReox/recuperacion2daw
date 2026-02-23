import React from "react";
import { Link } from "react-router-dom";

function PokemonCard({ name, id }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="card">
      {/*<img src={imageUrl} alt={name} />
      <h3>{name.toUpperCase()}</h3>*/}
      <Link to={`/detalle/${id}`}>Ver Detalle</Link>
    </div>
  );
}

export default PokemonCard;