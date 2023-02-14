import { Box, Grid } from "@mui/material";
import React from "react";
import DatePicker from "./DatePicker";
import CreateButton from "./CreateButton";
import Calendar from "./Calendar";
import Header from "./Header";
import Tasks from "./Tasks";

function HomePage() {
  const hours = [...Array(24).keys()];

  return (
    <Grid container sx={{ height: "100%" }} wrap="nowrap">
      <Box
        component={Grid}
        wrap="nowrap"
        item
        container
        direction="column"
        display={{ xs: "none", md: "flex" }}
        sx={{ height: "100%" }}
        md={10.2}
      >
        <Grid item container md={0.4} sx={{ height: "15%" }}>
          <Header />
        </Grid>
        <Grid item container md wrap="nowrap" sx={{ height: "85%" }}>
          <Grid
            item
            md={1.85}
            container
            direction="column"
            sx={{ padding: "15px 10px" }}
            style={{ minWidth: "270px" }}
          >
            <CreateButton />
            <DatePicker />
          </Grid>
          <Grid
            item
            md={9.65}
            sx={{ height: "100%", position: "relative" }}
            style={{ overflow: "scroll", overflowX: "hidden" }}
          >
            <div
              style={{
                paddingTop: "20px",
                backgroundColor: "#fff",
                zIndex: 999,
              }}
            >
              <Calendar timeUnit="week" hours={hours} />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12} md={1.8} style={{ minWidth: "285px" }}>
        <Tasks />
      </Grid>
    </Grid>
  );
}

export default HomePage;
