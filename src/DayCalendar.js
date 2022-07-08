import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import HourRow from "./HourRow";

function DayCalendar() {
  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24];

  return (
    <Grid container>
      <Grid item container style={{ height: "84px", position: "sticky", top: "0px", zIndex: "99", background: "#ffffff" }} alignItems="flex-end">
        <Grid item md="auto" sx={{ paddingRight: "7px" }}>
          <Typography sx={{ fontSize: "10px", color: "#70757a" }}>
            GMT+03
          </Typography>
        </Grid>
        <Grid
          item
          md
          container
          alignItems="flex-end"
          sx={{ borderBottom: "1px solid #cdcdcd" }}
        >
          <Grid item sx={{ width: "7px" }}></Grid>
          <Grid
            item
            container
            direction="column"
            md
            sx={{
              borderLeft: "1px solid #cdcdcd",
              paddingLeft: "7px",
              paddingBottom: "7px",
            }}
          >
            <Grid item container alignItems="center" justifyContent="center" 
            style={{ width: "46px", height: "46px", backgroundColor: "#1a73e8", borderRadius: "30px" }}>
              <Grid item sx={{ position: "absolute", top: "15px" }}>
                <Typography sx={{ color: "#1a73e8", fontSize: "11px", fontWeight: "bold"  }}>
                  FRI
                </Typography>
              </Grid>
              <Grid item sx={{ padding: "5px" }}>
                <Typography sx={{ color: "#fff", fontSize: "25px" }}>
                  13
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        {hours.map((hour) =>
          <HourRow key={hour.toString()}
                    hour={hour} isCurrentHour={hour === 1 ? true : false} hasHourInfo={true}/>
        )}
      </Grid>
    </Grid>
  );
}

export default DayCalendar;
