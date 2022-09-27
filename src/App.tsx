import { CssBaseline, ThemeProvider } from "@mui/material";
import { Children, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import AuthLayout from "./containers/layouts/AuthLayout";
import DefaultLayout from "./containers/layouts/DefaultLayout";
import LoginPage from "./pages/Auth/Login";
import { RootState, store } from "./store";
import { theme } from "./themes";

function App() {
  const auth = useSelector((state: RootState) => state.auth);
  const routes = useRoutes([
    {
      path: "/",
      element: auth.logged ? <Outlet /> : <Navigate to="/auth/login" />,
      children: [
        {
          element: <>Test</>,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{routes}</ThemeProvider>;
    </>
  );
}

export default App;
