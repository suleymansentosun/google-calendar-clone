import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

function HourRow(props) {
  return (
    <Grid item container>
      {/* {props.hasHourInfo && (
        <Grid item container direction="column" sx={{ width: "46.8px" }}>
          <Grid
            item
            container
            alignItems="flex-end"
            justifyContent="flex-end"
            sx={{ height: "55px", paddingRight: "7px" }}
          >
            <Grid item sx={{ position: "relative", top: "7.5px" }}>
              <Typography sx={{ fontSize: "10px", color: "#70757a" }}>
                {props.hour} AM
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )} */}
      <Grid item container md sx={{ borderBottom: "1px solid #cdcdcd" }}>
        {/* {props.hasHourInfo && <Grid item sx={{ width: "7px" }}></Grid>} */}
        <Grid
          item
          container
          alignItems="center"
          md
          sx={{ borderLeft: "1px solid #cdcdcd", height: "55px" }}
        >
          {props.isCurrentHour && (
            <Grid
              item
              container
              alignItems="center"
              style={{ position: "relative", left: "-6px" }}
            >
              <Grid item md="auto">
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#ea4335",
                  }}
                ></div>
              </Grid>
              <Grid item alignContent="center" md>
                <Divider
                  sx={{ borderColor: "#ea4335", borderBottomWidth: "medium" }}
                ></Divider>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HourRow;
