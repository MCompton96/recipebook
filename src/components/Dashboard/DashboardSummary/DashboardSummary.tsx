import { Box, Card, Grid, Typography } from "@mui/material";
import RecentRecipes from "./RecentRecipes";
import RecipeBreakdowns from "./RecipeBreakdowns";

export default function DashboardSummary() {
  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography sx={{ pb: 1 }} variant="h4">
              Recent Recipes
            </Typography>
            <RecentRecipes />
          </Box>
        </Grid>
        <Grid
          sx={{
            position: "relative",
          }}
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <RecipeBreakdowns />
        </Grid>
      </Grid>
    </Card>
  );
}
