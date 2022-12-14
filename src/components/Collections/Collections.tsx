import { Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageStructure from "src/layouts/PageStructure";

export default function Collections() {
  return (
    <>
      <Helmet>
        <title>Collections</title>
      </Helmet>
      <PageStructure title={`📒 Collections`}>
        <Grid item xs={12}></Grid>
      </PageStructure>
    </>
  );
}
