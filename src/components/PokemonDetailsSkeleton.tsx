import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonDetailsSkeleton() {
  return (
    <Card className="max-w-2xl mx-auto mt-8 p-6 shadow-lg">
      <CardHeader className="text-center">
        <Skeleton className="w-40 h-40 mx-auto rounded-md" />
        <Skeleton className="h-8 w-1/2 mx-auto mt-4" />

        <div className="flex justify-center gap-2 mt-3">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </CardHeader>

      <CardContent className="mt-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-5 w-20" />
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-3 w-full rounded" />
          ))}
        </div>

        <Skeleton className="h-10 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}