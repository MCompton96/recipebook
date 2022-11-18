import { RecipeCard } from "../AllRecipes/AllRecipesContent/types";
import { Ingredient } from "./Ingredients/types";

export type Recipe = RecipeCard & {
  id: string;
  websiteLink: string;
  ingredients: Ingredient[];
  method: Method[];
  rating?: number;
  cuisine?: string;
  category?: Category;
};

type Method = { step: number; text: string };
type Category = { id: string; name: string };
