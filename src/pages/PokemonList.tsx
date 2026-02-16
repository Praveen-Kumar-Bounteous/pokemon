import { useEffect, useState } from "react";
import { useAllPokemon } from "../hooks/useAllPokemon";
import PokemonCard from "@/components/PokemonCard";
import { Spinner } from "@/components/ui/spinner";

function PokemonList() {
  const { data, isPending } = useAllPokemon();
  const [showLoading, setShowLoading] = useState(true);


  useEffect(() => {
    if (isPending) {
      setShowLoading(true);
    } else {
      const timer = setTimeout(() => setShowLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isPending]);

  if (isPending || showLoading)
    return (
      <div className="flex items-center justify-center gap-2 p-8">
        <Spinner />
        <span>Loading...</span>
      </div>
    );


  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-16 py-14">
        {data.results.map((pokemon: any) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>

    </>
  );
}

export default PokemonList;