import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function PokemonCardSkeleton() {
  return (
    <Card className="p-2 sm:p-4 md:p-6">
      {/* Image Section */}
      <CardHeader className="flex items-center justify-center pb-4 px-1">
        <Skeleton className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-md" />
      </CardHeader>

      {/* Title Section */}
      <CardContent className="text-center">
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </CardContent>

      {/* Button Section */}
      <CardFooter>
        <Skeleton className="h-10 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
}

export default PokemonCardSkeleton;