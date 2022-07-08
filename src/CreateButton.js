import { Button, Stack } from "@mui/material";
import React from "react";
import CoolCreateIcon from "./CoolCreateIcon";

function CreateButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<CoolCreateIcon />}
        sx={{
          borderRadius: "30px",
          width: "150px",
          textTransform: "none",
          color: "#000",
          borderColor: "#cdcdcd",
          boxShadow: "1px 1px 1px 1px #cdcdcd",
          ":hover": { boxShadow: "2px 2px 12px 2px #cdcdcd", borderColor: "#cdcdcd", backgroundColor: "#F6FAFE" },
        }}
      >
        Create
      </Button>
    </Stack>
  );
}

export default CreateButton;
