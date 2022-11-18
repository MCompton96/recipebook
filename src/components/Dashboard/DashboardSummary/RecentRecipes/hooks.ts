import { RecentRecipe } from "./types";

export function useFetchRecentRecipes() {
  const recent: RecentRecipe[] = [
    {
      name: "Spaghetti Bolognase",
      website: "BBC Good Food",
      photo: "goodfood.png",
    },
    {
      name: "Chicken Katsu Burgers",
      website: "MOB Kitchen",
      photo: "mob.png",
      rating: 8.5,
    },
  ];

  return recent;
}
