import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useFeaturedPokemon } from "@/hooks/useFeaturedPokemon";
import { useEffect, useRef } from "react";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const Hero = () => {
  const navigate = useNavigate();
  const { data, isPending } = useFeaturedPokemon();
  const items = data?.results || [];

  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      if (nextRef.current) {
        nextRef.current.click();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [items]);

  if (isPending)
    return <div className="p-8"><PokemonCardSkeleton /></div>;

  return (
    <div className="w-full bg-gray-100">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-14 px-4 md:px-6 rounded-lg gap-6 md:gap-8">
      {/* Left Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          <span className="">Catch </span>
          the Best <span className="text-blue-600">Pokemon</span> Gear and Collectibles!
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-full sm:max-w-md mx-auto md:mx-0">
          Gear up for the ultimate Pokémon experience! From iconic toys and apparel to limited-edition collectibles, our collection is crafted for fans of all ages.
        </p>
        <Button
          className="bg-blue-600 cursor-pointer"
          onClick={() => navigate("/poke")}
        >
          Discover Now
        </Button>
      </div>

      {/* Right Carousel */}
      <div className="flex-1 w-full max-w-md mt-8 md:mt-0">
        <Carousel className="w-full h-64 sm:h-80 md:h-96">
          <CarouselContent>
            {items.map((pokemon: any, index: number) => (
              <CarouselItem
                key={pokemon.name}
                className="flex items-center justify-center snap-center rounded-lg shadow-lg p-2 sm:p-4"
              >
                <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-60 md:h-60 flex items-center justify-center">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                    alt={pokemon.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden" />
          <CarouselNext ref={nextRef} className="hidden" />
        </Carousel>
      </div>
    </div>
    </div>
  );
};

export default Hero;
