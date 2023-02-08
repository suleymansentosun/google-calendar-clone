import { Divider, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyles = makeStyles((theme) => ({
  scheduleBox: {
    width: "90%",
    height: "92%",
    backgroundColor: "rgb(3, 155, 229)",
    borderRadius: "4px",
    color: "#fff",
    paddingLeft: "6px",
    paddingTop: "3px",
    fontSize: "12px",
    fontWeight: "500",
  },
}));

function HourRow(props) {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      sx={{
        position: props.isFirstRow ? "sticky" : "initial",
        top: props.isFirstRow ? "64px" : "initial",
        zIndex: props.isFirstRow ? "999" : "initial",
      }}
    >
      <Grid item container md sx={{ borderBottom: "1px solid #cdcdcd" }}>
        <Grid
          item
          container
          alignItems="flex-start"
          md
          sx={{
            borderLeft: "1px solid #cdcdcd",
            height: props.isFirstRow ? "6.2px" : "55px",
            position: "relative",
          }}
        >
          {props.hasSchedule && (
            <Box className={classes.scheduleBox}>Yoklama</Box>
          )}
          {props.isCurrentHour && (
            <Grid
              item
              container
              alignItems="center"
              // Buradaki 'top' ile dinamik bir şekilde oynayarak kırmızı çizgiyi hareket ettirelim
              style={{ position: "absolute", left: "-6px", top: "20px" }}
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
