import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import AddTaskIcon from "@mui/icons-material/AddTask";

const useStyles = makeStyles(() => ({
  dayBox: {
    fontSize: "12px",
    borderRadius: "50%",
    minWidth: "24px",
    width: "30px",
    height: "30px",
    textTransform: "capitalize",
    whiteSpace: "nowrap",
  },
  scheduleButton: {
    width: "95%",
    height: "18px",
    backgroundColor: "rgb(66, 133, 244)",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "left",
    textTransform: "capitalize",
    padding: "0 6px",
  },
}));

export function DayBox({ date, week, hasSchedule }) {
  const isToday = date.toDateString() === new Date().toDateString();
  const isCurrentMonth = date.getMonth() === new Date().getMonth();
  const isStartOfMonth = date.getDate() === 1;

  const classes = useStyles();

  function getMonthAbbreviation(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[date.getMonth()];
  }

  return (
    <Grid
      item
      container
      md={12 / 7}
      style={{
        borderRight: "1px solid rgb(218,220,224)",
        textAlign: "center",
        paddingTop: week !== 0 ? "2.5px" : "initial",
        fontSize: "12px",
        fontWeight: "500",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Grid item md={12}>
        <Button
          className={classes.dayBox}
          style={{
            color: isCurrentMonth
              ? isToday
                ? "white"
                : "rgb(60,64,67)"
              : "#70757a",
            backgroundColor: isToday ? "rgb(26,115,232)" : "",
          }}
          sx={{
            "&:hover": {
              backgroundColor: isToday ? "#1967d2 !important" : "#f1f3f4",
            },
          }}
        >
          {isStartOfMonth
            ? getMonthAbbreviation(date) + " " + date.getDate()
            : date.getDate()}
        </Button>
        {hasSchedule && (
          <Button className={classes.scheduleButton}>
            <AddTaskIcon style={{ height: "14px" }} />
            <Typography style={{ fontSize: "12px", fontWeight: "500" }}>
              Yoklama
            </Typography>
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
