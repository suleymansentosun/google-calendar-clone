import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import RequireAuth from "./RequireAuth";
import WelcomePage from "./WelcomePage";
import store from './store';

const theme = createTheme({

});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
