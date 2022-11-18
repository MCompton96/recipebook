import { Box, Card, styled } from "@mui/material";

export const CardCover = styled(Card)(
  ({ theme }) => `
        position: relative;

        .MuiCardMedia-root {
            height: ${theme.spacing(26)}
        }
    `
);

export const CardCoverAction = styled(Box)(
  ({ theme }) => `
        position: absolute;
        right: ${theme.spacing(2)};
        bottom: ${theme.spacing(2)};
    `
);

export const CardAvatar = styled(Card)(
  ({ theme }) => `
      position: relative;
      overflow: visible;
      display: inline-block;
      margin-top: -${theme.spacing(9)};
      margin-left: ${theme.spacing(2)};
  
      .MuiAvatar-root {
        width: ${theme.spacing(16)};
        height: ${theme.spacing(16)};
      }

      img {
        background: ${theme.colors.alpha.trueWhite[100]};
        padding: ${theme.spacing(0.5)};
        display: block;
        border-radius: inherit;
        height: ${theme.spacing(16)};
      }
  `
);

export const CardTitle = styled(Box)(
  ({ theme }) => `
    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(3.5)};
  `
);
