import { Container, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "../PageTitleWrapper";
import DashboardHeader from "./DashboardHeader";
import DashboardSummary from "./DashboardSummary";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>📚 Recipe Book</title>
      </Helmet>
      <PageTitleWrapper>
        <DashboardHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <DashboardSummary />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
