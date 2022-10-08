import { CssBaseline, ThemeProvider } from "@mui/material";
import { Children, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import AuthLayout from "./containers/layouts/AuthLayout";
import DefaultLayout from "./containers/layouts/DefaultLayout";
import LoginPage from "./pages/Auth/Login";
import Routes from "./Routes";
import { RootState, store } from "./store";
import { theme } from "./themes";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
