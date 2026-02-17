import { useEffect, useRef } from "react";
import { useAllPokemon } from "../hooks/useAllPokemon";
import PokemonCard from "@/components/PokemonCard";
import { Spinner } from "@/components/ui/spinner";

function PokemonList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
  } = useAllPokemon();

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (isPending)
    return (
      <div className="flex items-center justify-center gap-2 p-8">
        <Spinner />
        <span>Loading...</span>
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 px-16 py-14">
        {data?.pages.map((page) =>
          page.results.map((pokemon: any) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))
        )}
      </div>

      <div
        ref={observerRef}
        className="flex justify-center items-center py-8"
      >
        {isFetchingNextPage && <Spinner />} <span className="px-2">Loading More...</span>
      </div>
    </>
  );
}

export default PokemonList;