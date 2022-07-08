import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton, Tooltip } from "@mui/material";

function BackwardDate() {
  return (
    <Tooltip
      title="Previous month"
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: "12px",
          },
        },
      }}
    >
      <IconButton>
        <ArrowBackIosNewIcon sx={{ fontSize: "16px", color: "#414345" }} />
      </IconButton>
    </Tooltip>
  );
}

export default BackwardDate;
