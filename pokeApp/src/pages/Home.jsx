import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Pokemon App</h1>

      <p>
        Bienvenido a pokeApp, desarrollado con React.
        Esta SPA permite consultar información de Pokemons 
        utilizando la API pública PokeAPI y jugar a un 
        pequeño juego basado en sus características.
      </p>

      <h2>¿Qué puedes hacer?</h2>

      <ul>
        <li>Consultar una lista de Pokemons.</li>
        <li>Ver el detalle de cada Pokemon.</li>
        <li>Jugar a un juego de adivinanza.</li>
        <li>Iniciar sesión para guardar puntuaciones.</li>
      </ul>
    </div>
  );
}

export default Home;
