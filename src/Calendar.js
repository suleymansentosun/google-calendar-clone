import React from "react";
import { DayCalendar } from "./DayCalendar";
import { MonthCalendar } from "./MonthCalendar";
import { WeekCalendar } from "./WeekCalendar";

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
      calendar = <MonthCalendar />;
      break;
    case "year":
      calendar = <div>Year calendar</div>;
      break;
    default:
      calendar = <WeekCalendar hours={hours} />;
  }
  return (
    <div style={{ height: timeUnit === "month" ? "100%" : "initial" }}>
      {calendar}
    </div>
  );
}

export default Calendar;
