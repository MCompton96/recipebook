import { Typography, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageStructure from "src/layouts/PageStructure/PageStructure";

import AllRecipesContent from "./AllRecipesContent";
import AllRecipesSearch from "./AllRecipesSearch";
import { useFetchRecipes } from "./hooks";

export default function AllRecipes() {
  const { data: recipes, isLoading } = useFetchRecipes();

  return (
    <>
      <Helmet>
        <title>All Recipes</title>
      </Helmet>
      {isLoading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <PageStructure title={`👨‍🍳 All Recipes (${recipes.length})`}>
          <Grid item xs={12}>
            <AllRecipesSearch />
          </Grid>
          <Grid item xs={12}>
            <AllRecipesContent recipes={recipes} />
          </Grid>
        </PageStructure>
      )}
    </>
  );
}
