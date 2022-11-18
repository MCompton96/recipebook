import { Website } from "./types";

export function useGetRecipeBreakdowns() {
  const recipes: Website[] = [
    { photo: "mob.png", website: "Mob Kitchen", count: 5 },
    { photo: "goodfood.png", website: "BBC Good Food", count: 7 },
    { photo: "nigella.png", website: "Nigella Lawson", count: 2 },
  ];

  return recipes;
}
