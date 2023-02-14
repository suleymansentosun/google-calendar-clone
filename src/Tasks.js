import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import TaskList from "./TaskList";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Tasks.css";
import Account from "./Account";
import CoolCreateIcon from "./CoolCreateIcon";

function Tasks() {
  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      sx={{
        height: "100%",
        borderLeft: "1px solid #cdcdcd",
        boxShadow: "-1px 1px 5px #e2e2e2",
      }}
    >
      <Grid
        item
        container
        justifyContent={{ xs: "flex-end", md: "flex-start" }}
        sx={{ padding: "20px 14px" }}
      >
        <Grid item xs={4} sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "17px" },
              color: "#5F6368",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Tasks
          </Typography>
        </Grid>
        <Box
          component={Grid}
          item
          container
          xs={4}
          justifyContent="flex-end"
          display={{ xs: "flex", md: "none" }}
        >
          <Grid item>
            <Account />
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item sx={{ padding: "16px 14px", height: "75%" }}>
        <TaskList />
      </Grid>
      <Grid item container display={{ xs: "flex", md: "none" }}>
        <Grid item container xs={12} justifyContent="space-between">
          <Grid item xs>
            <Divider sx={{ boxShadow: "1px -1px 2px #d0d0d0" }} />
          </Grid>
          <Grid item xs="auto" style={{ position: "relative" }}>
            <div id="c">
              <div id="b"></div>
            </div>
            <div style={{ position: "absolute", top: "-35px", left: "5px" }}>
              <button
                style={{
                  borderRadius: "50%",
                  background: "#fff",
                  cursor: "pointer",
                  border: "none",
                  boxShadow: "inset 1px -1px #f1f1f1, 1px -1px #f1f1f1",
                  width: "50px",
                  height: "50px",
                }}
              >
                <CoolCreateIcon />
              </button>
            </div>
          </Grid>
          <Grid item xs>
            <Divider sx={{ boxShadow: "1px -1px 2px #d0d0d0" }} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          sx={{ marginTop: "-30px" }}
        >
          <MoreHorizIcon />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Tasks;

/*
<div id="c">
    <div id="b"></div>
</div>

#c {
  height: 110px;
  overflow: hidden;
}
#b {
  height: 130px;
  width: 110px;
  border: 10px solid blue;
  border-radius: 50%;
  margin-top: -120px
}
*/
