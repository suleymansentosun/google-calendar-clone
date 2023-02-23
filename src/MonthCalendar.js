import { Grid } from "@mui/material";
import React from "react";
import { DayBox } from "./DayBox";

export function MonthCalendar() {
  // default month and year are current month and year
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const [month, setMonth] = React.useState(currentMonth);
  const [year, setYear] = React.useState(currentYear);

  function getCalendarDates(month, year) {
    var date = new Date(year, month, 1);
    var firstDay = date.getDay();
    var lastDay = new Date(year, month + 1, 0).getDay();
    var days = new Date(year, month + 1, 0).getDate();
    var calendarDates = [];
    var i;
    if (firstDay !== 0) {
      for (i = firstDay; i > 0; i--) {
        calendarDates.push(new Date(year, month, 1 - i));
      }
    }
    for (i = 1; i <= days; i++) {
      calendarDates.push(new Date(year, month, i));
    }
    if (lastDay !== 6) {
      for (i = 1; i <= 6 - lastDay; i++) {
        calendarDates.push(new Date(year, month + 1, i));
      }
    }
    return calendarDates;
  }
  const calendarDates = getCalendarDates(month, year);

  function groupByWeeks(array) {
    var groups = [];
    var i;
    for (i = 0; i < array.length; i += 7) {
      groups.push(array.slice(i, i + 7));
    }
    return groups;
  }
  const weeks = groupByWeeks(calendarDates);
  const weekComponents = weeks.map((week, index) => (
    <Grid
      key={index}
      item
      md={12}
      container
      style={{ borderBottom: "1px solid rgb(218,220,224)" }}
    >
      {week.map((date) => (
        <DayBox
          key={date.toISOString()}
          date={date}
          week={index}
          hasSchedule={false}
        />
      ))}
    </Grid>
  ));

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeekGrid = dayOfWeek.map((day, index) => (
    <Grid
      key={index}
      item
      md={12 / 7}
      style={{
        borderRight: "1px solid rgb(218,220,224)",
        textAlign: "center",
        paddingTop: "7px",
        fontSize: "11px",
        color: "gray",
        fontWeight: "600",
      }}
    >
      {day.toLocaleUpperCase()}
    </Grid>
  ));

  return (
    <Grid
      container
      style={{ height: "100%", borderLeft: "1px solid rgb(218,220,224)" }}
      direction="column"
      wrap="nowrap"
    >
      <Grid item md={0.4} container>
        {dayOfWeekGrid}
      </Grid>
      <Grid item md={11.6} container>
        {weekComponents}
      </Grid>
    </Grid>
  );
}
