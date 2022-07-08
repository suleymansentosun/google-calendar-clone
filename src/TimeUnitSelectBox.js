import { MenuItem, Select } from "@mui/material";
import React from "react";

const timeUnits = [
  {
    value: "day",
    label: "Day",
  },
  {
    value: "week",
    label: "Week",
  },
  {
    value: "month",
    label: "Month",
  },
  {
    value: "year",
    label: "Year",
  },
];

function TimeUnitSelectBox() {
  const [timeUnit, setTimeUnit] = React.useState("month");

  const handleChange = (event) => {
    setTimeUnit(event.target.value);
  };

  return (
    <Select
      size="small"
      id="select-time-unit"
      select
      value={timeUnit}
      onChange={handleChange}
      sx={{ fontSize: "14px" }}
    >
      {timeUnits.map((option) => (
        <MenuItem key={option.value} value={option.value} sx={{ fontSize: "14px" }}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default TimeUnitSelectBox;
