import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { RecipeCard as RecipeCardType } from "./types";

type Props = {
  recipes: RecipeCardType[];
};

export default function AllRecipesContent({ recipes }: Props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      flexWrap="wrap"
    >
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} />
      ))}
    </Grid>
  );
}
