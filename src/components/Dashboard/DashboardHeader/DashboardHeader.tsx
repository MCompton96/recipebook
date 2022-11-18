import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import { useFetchUser } from "src/common/hooks/userHooks";

export default function DashboardHeader() {
  const theme = useTheme();
  const user = useFetchUser();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8),
            fontSize: theme.typography.h1.fontSize,
            backgroundColor: theme.colors.primary.light,
          }}
          alt="User Avatar"
        >
          {user.avatar}
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome {user.givenNames}!
        </Typography>
      </Grid>
    </Grid>
  );
}
