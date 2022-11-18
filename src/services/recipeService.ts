import axios from "axios";
import { RecipeCard } from "src/components/AllRecipes/AllRecipesContent/types";
import { Recipe } from "src/components/Recipe/types";

const url = "http://localhost:4000";

export async function fetchRecipeCards(): Promise<RecipeCard[]> {
  const { data } = await axios.get(`${url}/recipeCards`);
  return data as RecipeCard[];
}

export async function fetchRecipes(): Promise<Recipe[]> {
  const { data } = await axios.get(`${url}/recipes`);
  return data as Recipe[];
}

export async function fetchRecipe(recipeId: string): Promise<Recipe> {
  const { data } = await axios.get(`${url}/recipes/${recipeId}`);
  return data as Recipe;
}
