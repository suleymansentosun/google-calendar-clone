import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { createTheme, ThemeProvider } from '@mui/material';
import './DatePicker.css';

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(
    new Date(),
  );

  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: "10px",
            fontWeight: "bold",
            width: "27px !important",
            height: "27px !important",
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            fontSize: "10px !important",
            width: "27px !important",
            height: "27px !important",
          }
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: "22px !important",
          }
        }
      },
      MuiCalendarPicker: {
        styleOverrides: {
          root: {
            margin: "0px",
            width: "auto",
          }
        }
      },
      MuiPickerStaticWrapper: {
        styleOverrides: {
          root: {
            minWidth: "auto",
          }
        }
      },
    }
  });

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            showDaysOutsideCurrentMonth={true}
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
      </LocalizationProvider>
    </ThemeProvider>
  );
}