import { Grid } from "@mui/material";
import React from "react";

export default function TimeInfo({ hour }) {
  const twelveHour = (hour + 1) % 12 || 12;
  return (
    <Grid
      md={12}
      item
      container
      sx={{
        height: "56.91px",
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
        <Grid
          item
          style={{
            position: "relative",
            top: "5px",
            left: "15px",
          }}
        >
          {hour === 23 ? "" : twelveHour + " " + (hour < 12 ? "AM" : "PM")}
        </Grid>
      </Grid>
    </Grid>
  );
}
