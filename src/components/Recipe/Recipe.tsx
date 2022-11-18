import {
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import FolderCopyTwoToneIcon from "@mui/icons-material/FolderCopyTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";

import {
  CardAvatar,
  CardCover,
  CardTitle,
} from "src/common/styled-components/cards";
import { useFetchRecipe } from "./hooks";
import Ingredients from "./Ingredients";
import RecipeStats from "./RecipeStats";

export default function Recipe() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { data: recipe, isLoading } = useFetchRecipe(recipeId);
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Recipe</title>
      </Helmet>
      {isLoading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <>
          <CardCover>
            <CardMedia image={recipe.image} />
          </CardCover>
          <CardAvatar>
            <img src={recipe.websiteLogo} alt={recipe.website} />
          </CardAvatar>
          <CardTitle>
            <Typography variant="h3" component="h3">
              {recipe.name}
            </Typography>
            <Typography variant="body2">{recipe.website}</Typography>
          </CardTitle>
          <Container maxWidth="lg" sx={{ mt: 2 }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={4}
              padding={2}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <RecipeStats
                  Icon={FolderCopyTwoToneIcon}
                  text={recipe.category.name}
                />
                <Divider orientation="vertical" />
                <RecipeStats Icon={LanguageTwoToneIcon} text={recipe.cuisine} />
                <Divider orientation="vertical" />
                <RecipeStats
                  Icon={ThumbUpTwoToneIcon}
                  text={`${recipe.rating.toString()} /10`}
                  textProps={theme.colors.success.dark}
                />
              </Grid>
              <Grid item xs={12}>
                <Ingredients ingredients={recipe.ingredients} />
              </Grid>
            </Grid>
          </Container>
        </>
        // <PageStructure
        //   header={
        //     <RecipeHeader
        //       title={recipe.name}
        //       logo={recipe.websiteLogo}
        //       website={recipe.website}
        //     />
        //   }
        // >
        //   <Grid item xs={12}>
        //     <Card>
        //       <Ingredients ingredients={recipe.ingredients} />
        //     </Card>
        //   </Grid>
        // </PageStructure>
      )}
    </>
  );
}
