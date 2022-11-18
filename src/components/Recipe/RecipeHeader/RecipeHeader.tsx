import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import { TitleAvatar } from "src/common/styled-components/avatars";

type Props = {
  title: string;
  logo: string;
  website: string;
};

export default function RecipeHeader({ title, logo, website }: Props) {
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <TitleAvatar>
          <img src={logo} alt="logo" />
        </TitleAvatar>
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">{website}</Typography>
      </Grid>
    </Grid>
  );
}
