import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { Step } from "./types";

type Props = {
  steps: Step[];
};

export default function Method({ steps }: Props) {
  return (
    <Card>
      <CardHeader title="Method" />
      <Divider />
      <CardContent>
        {steps.map((step) => (
          <Typography component="p" variant="body1">
            {step.text}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
