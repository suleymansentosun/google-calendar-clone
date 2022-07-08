import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function DayOfMonth(props) {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item>
        <IconButton sx={{ padding: "0", position: "relative" }}>
          <Typography sx={{ position: "absolute", top: "9px", color: "#EA4335", fontWeight: "700" }}>
            17
          </Typography>
          <CalendarTodayIcon sx={{ color: "#1967D2" }} fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item sx={{ display: "flex", alignItems: "center"  }}>
        <Typography sx={{ fontSize: "22px", color: "#5F6368", paddingTop: "3px" }}>
          Calendar
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DayOfMonth;