import { RecipeCard } from "./AllRecipesContent/types";

export function filterRecipes(recipes: RecipeCard[], search: string) {
  return recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(search) ||
      recipe.website.toLowerCase().includes(search)
  );
}
