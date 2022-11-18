import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import PageTitleWrapper from "src/components/PageTitleWrapper";

type Props = {
  title?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
};

export default function PageStructure(props: Props) {
  const { title, children, header } = props;
  return (
    <>
      <PageTitleWrapper>
        {header && header}
        {title && (
          <Typography variant="h2" component="h2" gutterBottom>
            {title}
          </Typography>
        )}
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
          padding={2}
        >
          {children}
        </Grid>
      </Container>
    </>
  );
}
