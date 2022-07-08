import { Grid, Typography } from "@mui/material";
import React from "react";
import HourRow from "./HourRow";

function WeekCalendar() {
  const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <Grid container>
      <Grid item container>
        {/* 2.1 */}
        <Grid item md container>
          {hours.map((hour) =>
            <HourRow key={hour.toString()}
                      hour={hour} isCurrentHour={hour === 1 ? true : false} hasHourInfo={true} />
          )}
        </Grid>
        <Grid item md container>
          {hours.map((hour) =>
            <HourRow key={hour.toString()}
                      hour={hour} isCurrentHour={hour === 1 ? true : false} hasHourInfo={false} />
          )}
        </Grid>
        <Grid item md container>
          {hours.map((hour) =>
            <HourRow key={hour.toString()}
                      hour={hour} isCurrentHour={hour === 1 ? true : false} hasHourInfo={false} />
          )}
        </Grid>
        <Grid item md container>
          {hours.map((hour) =>
            <HourRow key={hour.toString()}
                      hour={hour} isCurrentHour={hour === 1 ? true : false} hasHourInfo={false} />
          )}
        </Grid>
        <Grid item md container>
          {hours.map((hour) =>
            <HourRow key={hour.toString()}
                      hour={hour} isCurrentHour={hour === 1 ? true : false} hasHourInfo={false} />
          )}
        </Grid>
        <Grid item md container>
          {hours.map((hour) =>
            <HourRow key={hour.toString()}
                      hour={hour} isCurrentHour={hour === 1 ? true : false} hasHourInfo={false} />
          )}
        </Grid>
        <Grid item md container>
          {hours.map((hour) =>
            <HourRow key={hour.toString()}
                      hour={hour} isCurrentHour={hour === 1 ? true : false} hasHourInfo={false} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WeekCalendar;
