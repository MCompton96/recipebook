import { Box, Divider, Grid, Icon, Typography } from "@mui/material";

type Props = {
  Icon: React.ElementType<any>;
  text: string;
  textProps?: string;
};

export default function RecipeStat(props: Props) {
  const { Icon, text, textProps } = props;

  return (
    <>
      <Icon sx={{ mr: 0.5 }} fontSize="small" />
      <Typography variant="h6" sx={{ color: textProps }}>
        {text}
      </Typography>
    </>
  );
}
