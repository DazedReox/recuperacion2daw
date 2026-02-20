import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/pokemons">Pokemons</Link> |{" "}
        <Link to="/jugar">Jugar</Link> |{" "}

        {!user ? (
          <>
            <Link to="/login">Iniciar Sesión</Link> |{" "}
            <Link to="/register">Registro</Link>
          </>
        ) : (
          <>
            <span>Hola, {user.email}</span> |{" "}
            <button onClick={logout}>Cerrar Sesión</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;