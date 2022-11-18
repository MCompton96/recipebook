import { ListItem, ListItemText } from "@mui/material";
import { ListItemAvatarWrapper } from "src/common/styled-components/avatars";

type Props = {
  photo: string;
  website: string;
  count: number;
};

export default function BreakdownOption(props: Props) {
  const { photo, website, count } = props;

  return (
    <ListItem disableGutters>
      <ListItemAvatarWrapper>
        <img src={`/static/images/placeholders/logo/${photo}`} alt="Logo" />
      </ListItemAvatarWrapper>
      <ListItemText
        primary={website}
        primaryTypographyProps={{ variant: "h5", noWrap: true }}
        secondary={count.toString()}
        secondaryTypographyProps={{
          variant: "subtitle2",
          noWrap: true,
        }}
      />
    </ListItem>
  );
}
