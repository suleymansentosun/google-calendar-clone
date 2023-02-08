import { Grid } from "@mui/material";
import React from "react";

export default function TimeInfo({ hour }) {
  const twelveHour = hour % 12 || 12;
  const isFirstRow = hour === 0;
  return (
    <Grid
      md={12}
      item
      container
      sx={{
        height: isFirstRow ? "71px" : "55.8px",
        position: isFirstRow ? "sticky" : "initial",
        top: isFirstRow ? "0" : "initial",
        zIndex: isFirstRow ? "999" : "initial",
        backgroundColor: isFirstRow ? "white" : "initial",
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
        <Grid item>
          {hour === 0
            ? "GMT+01"
            : hour === 24
            ? ""
            : twelveHour + " " + (hour < 12 ? "AM" : "PM")}
        </Grid>
      </Grid>
    </Grid>
  );
}
