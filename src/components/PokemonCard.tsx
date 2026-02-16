import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

type PokemonCardProps = {
  name: string;
  url: string;
};

const extractPokemonId = (url: string) => {
  const segments = url.split("/");
  return Number(segments[segments.length - 2]);
};

function PokemonCard({ name, url }: PokemonCardProps) {
  const navigate = useNavigate();
  const id = extractPokemonId(url);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Card
  className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 p-2 sm:p-4 md:p-6"
>
  <CardHeader className="flex items-center justify-center pb-4 px-1">
    <img
      src={imageUrl}
      alt={name}
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
    />
  </CardHeader>

  <CardContent className="text-center">
    <CardTitle className="capitalize text-base sm:text-lg md:text-xl lg:text-2xl">
      {name}
    </CardTitle>
  </CardContent>

  <CardFooter>
    <Button
      onClick={() => navigate(`/pokemon/${id}`)}
      className="w-full cursor-pointer text-sm sm:text-base md:text-lg"
    >
      View More
    </Button>
  </CardFooter>
</Card>

  );
}

export default PokemonCard;
