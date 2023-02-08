import { Grid } from "@mui/material";
import React from "react";

export default function Protrusion({ hour }) {
  const isFirstRow = hour === 0;
  return (
    <Grid
      md={12}
      item
      container
      sx={{
        height: isFirstRow ? "71px" : "55.8px",
        borderBottom: "1px solid #cdcdcd",
        position: isFirstRow ? "sticky" : "initial",
        top: isFirstRow ? "0" : "initial",
        zIndex: isFirstRow ? "999" : "initial",
        backgroundColor: isFirstRow ? "white" : "initial",
      }}
    ></Grid>
  );
}
