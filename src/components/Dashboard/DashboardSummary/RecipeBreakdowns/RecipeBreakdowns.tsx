import { Box, Grid, List } from "@mui/material";
import RecipePieChart from "../RecipePieChart";
import BreakdownOption from "./BreakdownOption";
import { useGetRecipeBreakdowns } from "./hooks";

export default function RecipeBreakdowns() {
  const recipes = useGetRecipeBreakdowns();

  return (
    <Box py={4} pr={4} flex={1}>
      <Grid container spacing={0}>
        <Grid
          xs={12}
          sm={5}
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <RecipePieChart websites={recipes} />
        </Grid>
        <Grid
          xs={12}
          sm={7}
          item
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <List>
            {recipes.map((recipe) => (
              <BreakdownOption {...recipe} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
