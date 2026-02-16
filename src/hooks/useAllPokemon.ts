import { useQuery } from "@tanstack/react-query";
import { fetchAllPokemon } from "../api/pokemon.api";

export const useAllPokemon = () => {
  return useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchAllPokemon,
    staleTime: 1000 * 60 * 5,
  });
};
