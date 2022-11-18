import { styled, OutlinedInput } from "@mui/material";

export const StyledOutlinedInput = styled(OutlinedInput)(
  ({ theme }) => `
        background-color: ${theme.colors.alpha.white[100]};
    `
);
