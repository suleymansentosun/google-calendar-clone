import { Grid } from "@mui/material";
import React from "react";
import Protrusion from "./Protrusion";
import TimeInfo from "./TimeInfo";

export default function Clock({ hours }) {
  const protrusionColumn = hours.map((hour) => <Protrusion key={hour} />);

  const clockColumn = hours.map((hour) => <TimeInfo key={hour} hour={hour} />);

  return (
    <>
      <Grid item md={0.6} container>
        <Grid
          md={12}
          item
          container
          sx={{
            height: "80.1px",
            position: "sticky",
            top: "0",
            zIndex: "999",
            backgroundColor: "white",
          }}
        >
          <Grid
            item
            container
            alignItems="end"
            style={{
              fontSize: "10px",
              whiteSpace: "nowrap",
              color: "gray",
            }}
          >
            <Grid item style={{ position: "relative", top: "-4px" }}>
              GMT+01
            </Grid>
          </Grid>
        </Grid>
        {clockColumn}
      </Grid>
      <Grid item md={0.15} container>
        <Grid
          md={12}
          item
          container
          sx={{
            height: "80.1px",
            borderBottom: "1px solid #cdcdcd",
            position: "sticky",
            top: "0",
            zIndex: "999",
            backgroundColor: "white",
          }}
        ></Grid>
        {protrusionColumn}
      </Grid>
    </>
  );
}
