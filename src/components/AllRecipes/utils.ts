import { RecipeCard } from "./AllRecipesContent/types";

export function filterRecipes(recipes: RecipeCard[], search: string) {
  return recipes.filter((recipe) => {
    const formattedSearch = search.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(formattedSearch) ||
      recipe.website.toLowerCase().includes(formattedSearch)
    );
  });
}
