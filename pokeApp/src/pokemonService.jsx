import React from "react";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemons(limit = 20) {
  const response = await fetch(`${BASE_URL}?limit=${limit}`);
  const data = await response.json();
  return data.results;
}

export async function getPokemonById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
}