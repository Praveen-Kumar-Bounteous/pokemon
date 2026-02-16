import { useQuery } from "@tanstack/react-query";
import { fetchPokemonById } from "../api/pokemon.api";

export const usePokemon = (id: string | number) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemonById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
