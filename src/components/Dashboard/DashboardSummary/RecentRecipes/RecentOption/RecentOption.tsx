import {
  ListItem,
  ListItemText,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { ListItemAvatarWrapper } from "src/common/styled-components/avatars";
import GradeIcon from "@mui/icons-material/Grade";

type Props = {
  name: string;
  website: string;
  photo: string;
  rating?: number;
};

export default function RecentOption(props: Props) {
  const { name, website, photo, rating } = props;
  const theme = useTheme();

  const renderRating = () =>
    rating ? (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        color={theme.colors.success.dark}
      >
        <Typography align="right" sx={{ mr: 1 }}>
          8.5
        </Typography>
        <GradeIcon />
      </Box>
    ) : (
      <Button variant="text">Rate</Button>
    );
  return (
    <ListItem
      secondaryAction={renderRating()}
      component={Button}
      sx={{
        my: 1,
        border: `1px solid ${theme.colors.primary.lighter}`,
      }}
    >
      <ListItemAvatarWrapper>
        <img src={`/static/images/placeholders/logo/${photo}`} alt="Logo" />
      </ListItemAvatarWrapper>
      <ListItemText
        primary={name}
        primaryTypographyProps={{ variant: "h5", noWrap: true }}
        secondary={website}
        secondaryTypographyProps={{ variant: "subtitle2", noWrap: true }}
      />
      {/* </ListItemButton> */}
    </ListItem>
  );
}
