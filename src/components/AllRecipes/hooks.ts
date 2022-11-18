import { useQuery } from "react-query";
import { fetchRecipeCards } from "src/services/recipeService";
import { RecipeCard } from "./AllRecipesContent/types";

const ALL_RECIPES = "ALL_RECIPES";

export function useFetchRecipes() {
  return useQuery<RecipeCard[], Error>([ALL_RECIPES], {
    queryFn: fetchRecipeCards,
  });
}
