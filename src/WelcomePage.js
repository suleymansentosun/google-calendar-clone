import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogleAccount } from "./store/auth-actions";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const smallScreen = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  let navigate = useNavigate();

  if (loggedInUser) {
    navigate("/home");
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm="auto">
        <Card
          sx={{
            height: smallScreen ? "100vh" : "500px",
            textAlign: "center",
            "& .MuiCardContent-root": {
              paddingTop: smallScreen ? "24px" : "40px",
              paddingBottom: smallScreen ? "16px" : "40px",
              paddingRight: smallScreen ? "16px" : "80px",
              paddingLeft: smallScreen ? "16px" : "80px",
            },
          }}
        >
          <CardContent>
            <svg
              viewBox="0 0 75 24"
              width="75"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="l5Lhkf"
            >
              <g id="qaEJec">
                <path
                  fill="#ea4335"
                  d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"
                ></path>
              </g>
              <g id="YGlOvc">
                <path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path>
              </g>
              <g id="BWfIk">
                <path
                  fill="#4285f4"
                  d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"
                ></path>
              </g>
              <g id="e6m3fd">
                <path
                  fill="#fbbc05"
                  d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"
                ></path>
              </g>
              <g id="vbkDmc">
                <path
                  fill="#ea4335"
                  d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"
                ></path>
              </g>
              <g id="idEJde">
                <path
                  fill="#4285f4"
                  d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"
                ></path>
              </g>
            </svg>
            <Typography
              sx={{ fontSize: "24px", marginTop: "8px", marginBottom: "8px" }}
            >
              Sign in
            </Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "24px" }}>
              to continue to Google Calendar
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "black",
                textTransform: "none",
                padding: "12px 22px",
                ":hover": {
                  backgroundColor: "#fff",
                },
              }}
              onClick={() => dispatch(signInWithGoogleAccount())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="22px"
                height="22px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <Typography sx={{ marginLeft: "8px" }}>
                Sign in with Google
              </Typography>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WelcomePage;
