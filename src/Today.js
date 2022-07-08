import { Button, Tooltip } from "@mui/material";
import React from "react";

function Today() {
  return (
    <Tooltip
      title="Sunday, April 17"
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: "12px",
          },
        },
      }}
    >
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          fontSize: "14px",
          color: "#0e0d0d",
          border: "1px solid #cdcdcd",
          ":hover": { border: "1px solid #cdcdcd" },
        }}
      >
        Today
      </Button>
    </Tooltip>
  );
}

export default Today;
