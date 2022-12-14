import { Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageStructure from "src/layouts/PageStructure";

export default function Explore() {
  return (
    <>
      <Helmet>
        <title>Explore</title>
      </Helmet>
      <PageStructure title="🌍 Explore">
        <Grid item xs={12}></Grid>
      </PageStructure>
    </>
  );
}
