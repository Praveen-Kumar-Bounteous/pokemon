const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchAllPokemon = async () => {
  const res = await fetch(`${BASE_URL}?limit=1000&offset=0`);
  if (!res.ok) throw new Error("Failed to fetch pokemon list");
  return res.json();
};

export const fetchPokemonById = async (id: string | number) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch pokemon");
  return res.json();
};

export const fetchFeaturedPokemon = async () => {
  const res = await fetch(`${BASE_URL}?limit=10&offset=0`);
  if(!res.ok) throw new Error("Failed to fetch pokemon");
  return res.json();
}