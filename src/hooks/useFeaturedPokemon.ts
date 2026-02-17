import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedPokemon } from "../api/pokemon.api";

export const useFeaturedPokemon = () => {
  return useQuery({
    queryKey: ["pokemon", "featured"],
    queryFn: fetchFeaturedPokemon,
    staleTime: 1000 * 60 * 5,
  });
};
