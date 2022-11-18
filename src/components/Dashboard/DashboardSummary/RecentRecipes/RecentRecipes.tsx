import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { useFetchRecentRecipes } from "./hooks";
import RecentOption from "./RecentOption";

export default function RecentRecipes() {
  const recentRecipes = useFetchRecentRecipes();

  return (
    <List disablePadding>
      {recentRecipes.map((recent) => (
        <RecentOption {...recent} />
      ))}
    </List>
  );
}
