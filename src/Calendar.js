import React from "react";
import DayCalendar from "./DayCalendar";
import WeekCalendar from "./WeekCalendar";

function Calendar(props) {
  const timeUnit = props.timeUnit;
  const hours = props.hours;
  let calendar;
  switch (timeUnit) {
    case "day":
      calendar = <DayCalendar hours={hours} />;
      break;
    case "week":
      calendar = <WeekCalendar hours={hours} />;
      break;
    case "month":
      calendar = <div>Month calendar</div>;
      break;
    case "year":
      calendar = <div>Year calendar</div>;
      break;
  }
  return <div>{calendar}</div>;
}

export default Calendar;
