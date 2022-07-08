import React from 'react';
import DayCalendar from './DayCalendar';
import WeekCalendar from './WeekCalendar';

function Calendar(props) {
  const timeUnit = props.timeUnit;
  let calendar;
  switch(timeUnit) {
    case "day":
      calendar = <DayCalendar />
      break;
    case "week":
      calendar = <WeekCalendar />;
      break;
    case "month":
      calendar = <div>Month calendar</div>;
      break;
    case "year":
      calendar = <div>Year calendar</div>;
      break;
  }
  return (
    <div>{calendar}</div>
  );
}

export default Calendar;