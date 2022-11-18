import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";
import { ListItemAvatarWrapper } from "src/common/styled-components/avatars";
import { RecipeCard as Props } from "../types";

export default function RecipeCard(props: Props) {
  const { id, image, website, websiteLogo, name, lastMade } = props;
  return (
    <Grid item xs={4} padding={1}>
      <Card>
        <CardActionArea component={RouterLink} to={`/recipes/${id}`}>
          <CardHeader
            avatar={
              <ListItemAvatarWrapper>
                <img src={websiteLogo} alt={website} />
              </ListItemAvatarWrapper>
            }
            title={name}
            subheader={website}
            sx={{ height: 80 }}
          />
          <CardMedia component="img" height={150} image={image} />
          <CardContent>
            <Typography variant="body2">
              Last made: {moment(lastMade).fromNow()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
