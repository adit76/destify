import React from "react";
import { createTheme } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import useMediaQuery from "@mui/material/useMediaQuery";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#3f51b5",
      light: "#757de8",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#f44336",
      light: "#ff7961",
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 14,
  },
});

export default theme;
