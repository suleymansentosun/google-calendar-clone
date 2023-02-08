import { Grid } from "@mui/material";
import React from "react";
import Protrusion from "./Protrusion";
import TimeInfo from "./TimeInfo";

export default function Clock({ hours }) {
  const protrusionColumn = hours.map((hour) => (
    <Protrusion key={hour} hour={hour} />
  ));

  const clockColumn = hours.map((hour) => <TimeInfo key={hour} hour={hour} />);

  return (
    <>
      <Grid item md={0.6} container>
        {clockColumn}
      </Grid>
      <Grid item md={0.15} container>
        {protrusionColumn}
      </Grid>
    </>
  );
}
