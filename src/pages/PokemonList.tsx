import { useEffect, useRef } from "react";
import { useAllPokemon } from "../hooks/useAllPokemon";
import PokemonCard from "@/components/PokemonCard";
import PokemonCardSkeleton from "@/components/PokemonCardSkeleton";

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
    },
      { threshold: 1 }
    );

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-16 py-14">
        {Array.from({ length: 8 }).map((_, i) => (
          <PokemonCardSkeleton key={i} />
        ))}
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
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 px-16 py-14"
      >
        {isFetchingNextPage && Array.from({ length: 4 }).map((_, i) => (
          <PokemonCardSkeleton key={`loading-${i}`} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;