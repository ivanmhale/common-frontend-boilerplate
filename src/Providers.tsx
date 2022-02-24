import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import config from "./config";

const theme = createTheme({
  palette: {
    mode:
      config.darkModeWindow &&
      (new Date().getHours() >= config.darkModeWindow.start ||
        new Date().getHours() < config.darkModeWindow.end)
        ? "dark"
        : "light",
    primary: {
      main: config.primaryColor,
    },
    secondary: {
      main: config.accentColor,
    },
  },
});

export default (props: { children: React.ReactElement }) => {
  return (
    <ReduxProvider {...{ store }}>
      <BrowserRouter>
        <ThemeProvider {...{ theme }}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
};
