import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Step } from "./types";

type Props = {
  steps: Step[];
};

export default function Method({ steps }: Props) {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title="Method" />
      <Divider />
      <CardContent sx={{ pt: 1 }}>
        <List disablePadding>
          {steps
            .sort((a, b) => (a.step > b.step ? 1 : -1))
            .map((step) => (
              <>
                <ListItem alignItems="flex-start" disableGutters sx={{ mt: 2 }}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.colors.secondary.dark }}>
                      <Typography>{step.step}</Typography>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography component="p" variant="body1">
                      {step.text}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
              </>
            ))}
        </List>
      </CardContent>
    </Card>
  );
}
