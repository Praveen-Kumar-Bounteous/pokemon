import { usePokemon } from "../hooks/usePokemon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { Progress } from "@/components/ui/progress";

type PokemonDetailsProps = {
  id: number | null;
};

export default function PokemonDetails({ id }: PokemonDetailsProps) {
  const { data, isPending, error } = usePokemon(id!);

  if (!id) return null;

  if (isPending)
    return (
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <Spinner className="w-12 h-12" />
        <span className="text-lg">Loading details...</span>
      </div>
    );

  if (error instanceof Error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>;

  const imageUrl =
    data.sprites.other["official-artwork"].front_default;

  return (
    <Card className="max-w-2xl mx-auto mt-8 p-6 shadow-lg hover:shadow-2xl transition">
      <CardHeader className="text-center">
        <img
          src={imageUrl}
          alt={data.name}
          className="w-40 h-40 mx-auto object-contain"
        />
        <CardTitle className="capitalize text-3xl mt-2 font-bold">
          {data.name} #{data.id}
        </CardTitle>

        <div className="flex justify-center gap-2 mt-3">
          {data.types.map((type: any) => (
            <Badge
              key={type.type.name}
              className={`capitalize px-3 py-1 text-white ${
                type.type.name === "fire"
                  ? "bg-red-500"
                  : type.type.name === "water"
                  ? "bg-blue-500"
                  : type.type.name === "grass"
                  ? "bg-green-500"
                  : "bg-gray-500"
              }`}
            >
              {type.type.name}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="mt-6 space-y-4">
        {/* Base Info */}
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Base Experience:</strong> {data.base_experience}
          </p>
          <p>
            <strong>Height:</strong> {data.height} | <strong>Weight:</strong>{" "}
            {data.weight}
          </p>
        </div>

        {/* Abilities */}
        <div>
          <strong>Abilities:</strong>{" "}
          {data.abilities.map((a: any) => (
            <Badge
              key={a.ability.name}
              variant={a.is_hidden ? "outline" : "default"}
              className="capitalize mr-2"
            >
              {a.ability.name} {a.is_hidden && "(Hidden)"}
            </Badge>
          ))}
        </div>

        {/* Stats with progress bars */}
        <div>
          <strong>Stats:</strong>
          <div className="mt-2 space-y-1">
            {data.stats.map((s: any) => (
              <div key={s.stat.name}>
                <span className="capitalize">{s.stat.name}</span>
                <Progress
                  value={s.base_stat}
                  max={255}
                  className="mt-1 h-3 rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Forms */}
        <div>
          <strong>Forms:</strong>{" "}
          {data.forms.map((f: any) => (
            <Badge key={f.name} className="capitalize mr-2">
              {f.name}
            </Badge>
          ))}
        </div>

        {/* Cries */}
        {data.cries?.latest && (
          <div>
            <strong>Cries:</strong>
            <audio controls className="mt-1 w-full">
              <source src={data.cries.legacy} type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
