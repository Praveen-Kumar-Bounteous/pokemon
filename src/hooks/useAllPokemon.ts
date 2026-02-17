// import { useQuery } from "@tanstack/react-query";
// import { fetchAllPokemon } from "../api/pokemon.api";

// export const useAllPokemon = () => {
//   return useQuery({
//     queryKey: ["pokemon"],
//     queryFn: fetchAllPokemon,
//     staleTime: 1000 * 60 * 5,
//   });
// };

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllPokemon } from "../api/pokemon.api";

export const useAllPokemon = () => {
  return useInfiniteQuery({
    queryKey: ["pokemon", "infinite"],
    queryFn: fetchAllPokemon,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const nextOffset = pages.length * 20;
      return lastPage.next ? nextOffset : undefined;
    },
    staleTime: 1000 * 60 * 5,
  });
};



//staleTime : makes the content fresh for specified time interval like it wont refetch the api for same
//image within that time