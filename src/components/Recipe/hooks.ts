import { useQuery } from "react-query";
import { fetchRecipe } from "src/services/recipeService";
import { Recipe } from "./types";

const RECIPE = "RECIPE";

export function useFetchRecipe(recipeId: string) {
  return useQuery([RECIPE, recipeId], {
    queryFn: async () => await fetchRecipe(recipeId),
    enabled: !!recipeId,
  });
}
