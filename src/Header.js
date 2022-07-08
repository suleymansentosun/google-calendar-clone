import { Grid } from '@mui/material';
import React from 'react';
import BackwardDate from './BackwardDate';
import Date from './Date';
import DayOfMonth from './DayOfMonth';
import ForwardDate from './ForwardDate';
import TimeUnitSelectBox from './TimeUnitSelectBox';
import Today from './Today';

function Header() {
  return (
    <Grid item container spacing={{ xs: 3, lg: 8 }} sx={{ paddingTop: "14px", paddingBottom: "14px", paddingLeft: "60px", paddingRight: "15px", borderBottom: "1px solid #cdcdcd" }}>
        <Grid item md="auto">
            <DayOfMonth day={16} />
        </Grid>
        <Grid item container md spacing={2}>
            <Grid item>
                <Today date={new Date()} />
            </Grid>
            <Grid item container spacing={0} style={{ width: "auto" }}>
                <Grid item>
                    <BackwardDate />    
                </Grid>
                <Grid item>
                    <ForwardDate />
                </Grid>
            </Grid>
            <Grid item>
                <Date date={new Date()}/>
            </Grid>
        </Grid>
        <Grid item md="auto" container justifyContent="flex-end">
            <Grid item>
                <TimeUnitSelectBox />
            </Grid>
        </Grid>
    </Grid>
  );
}

export default Header;