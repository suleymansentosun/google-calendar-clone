import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, Tooltip } from "@mui/material";

function ForwardDate() {
  return (
    <Tooltip
      title="Next month"
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: "12px",
          },
        },
      }}
    >
      <IconButton>
        <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#414345" }} />
      </IconButton>
    </Tooltip>
  );
}

export default ForwardDate;
