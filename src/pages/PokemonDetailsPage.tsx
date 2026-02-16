import { useParams } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

export default function PokemonDetailsPage() {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>Pokemon not found</div>;

  return <PokemonDetails id={Number(id)} />;
}
