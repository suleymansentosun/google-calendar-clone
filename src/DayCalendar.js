import { Box, Grid } from "@mui/material";
import React from "react";
import Clock from "./Clock";
import HourRow from "./HourRow";

function DayCalendar(props) {
  const hours = props.hours;

  // const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // const date = new Date();
  // const dayOfWeek = daysOfWeek[date.getUTCDay()];

  return (
    <Grid container>
      <Grid item container>
        <Clock hours={hours} />
        <Grid item md container>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "sticky",
              top: "0",
              zIndex: "1",
              backgroundColor: "#fff",
              paddingLeft: "5px",
            }}
          >
            <Grid
              item
              container
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box
                sx={{
                  color: "#1A73E8",
                  fontSize: "11px",
                  fontWeight: 500,
                  marginLeft: "9px",
                  marginBottom: "3.1px",
                }}
              >
                MON
              </Box>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box
                sx={{
                  color: "#fff",
                  fontSize: "26px",
                  fontWeight: 400,
                  backgroundColor: "#1A73E8",
                  borderRadius: "50%",
                  padding: "6px 9px",
                  width: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ position: "relative", top: "-2px" }}>26</Box>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{
              position: "sticky",
              top: "64px",
              zIndex: "999",
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
                  height: "14.2px",
                  position: "relative",
                }}
              ></Grid>
            </Grid>
          </Grid>
          {hours.map((hour) => (
            <HourRow
              key={hour.toString()}
              hour={hour}
              isCurrentHour={hour === 1 ? true : false}
              hasSchedule={hour === 15 ? true : false}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DayCalendar;
