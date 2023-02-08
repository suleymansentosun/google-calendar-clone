import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Clock from "./Clock";
import HourRow from "./HourRow";

function WeekCalendar(props) {
  function firstThreeCaps(str) {
    return str.substring(0, 3).toUpperCase();
  }

  const hours = props.hours;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const currentDay = date.getDay();
  const lastSunday = new Date(date.setDate(date.getDate() - currentDay));

  const daysColumns = days.map((day, index) => {
    const isToday = index === currentDay;

    const dayOfLastSunday = lastSunday.getDate();
    const monthOfLastSunday = lastSunday.getMonth();
    const nextMonthDay = new Date(
      Date.UTC(
        lastSunday.getFullYear(),
        monthOfLastSunday,
        dayOfLastSunday + index
      )
    );

    return (
      <Grid key={index} item md container>
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
          }}
        >
          <Grid item container alignItems="center" justifyContent="center">
            <Box
              sx={{
                color: isToday ? "#1A73E8" : "#70757a",
                fontSize: "11px",
                fontWeight: 500,
                marginBottom: "3.1px",
              }}
            >
              {firstThreeCaps(days[(0 + index) % 7])}
            </Box>
          </Grid>
          <Grid item container alignItems="center" justifyContent="center">
            <Box
              sx={{
                color: isToday ? "#fff" : "#70757a",
                fontSize: "26px",
                fontWeight: 400,
                backgroundColor: isToday ? "#1A73E8" : "#fff",
                borderRadius: isToday ? "50%" : "initial",
                padding: "6px 9px",
                width: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box sx={{ position: "relative", top: "-2px" }}>
                {nextMonthDay.getDate()}
              </Box>
            </Box>
          </Grid>
        </Grid>
        {hours.map((hour) => (
          <HourRow
            key={hour.toString()}
            hour={hour}
            isCurrentHour={hour === 1 ? true : false}
            isFirstRow={hour === 0 ? true : false}
            hasSchedule={day === "Wednesday" && hour === 15 ? true : false}
          />
        ))}
      </Grid>
    );
  });

  return (
    <Grid container>
      <Grid item container>
        {/* 2.1 */}
        <Clock hours={hours} />
        {daysColumns}
      </Grid>
    </Grid>
  );
}

export default WeekCalendar;
