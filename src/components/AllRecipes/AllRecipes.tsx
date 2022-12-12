import { Typography, Grid } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageStructure from "src/layouts/PageStructure/PageStructure";

import AllRecipesContent from "./AllRecipesContent";
import AllRecipesSearch from "./AllRecipesSearch";
import { useFetchRecipes } from "./hooks";
import { filterRecipes } from "./utils";

export default function AllRecipes() {
  const { data: recipes, isLoading } = useFetchRecipes();
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Helmet>
        <title>All Recipes</title>
      </Helmet>
      {isLoading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <PageStructure
          title={`👨‍🍳 All Recipes (${filterRecipes(recipes, search).length})`}
        >
          <Grid item xs={12}>
            <AllRecipesSearch search={search} setSearch={setSearch} />
          </Grid>
          <Grid item xs={12}>
            <AllRecipesContent recipes={filterRecipes(recipes, search)} />
          </Grid>
        </PageStructure>
      )}
    </>
  );
}
