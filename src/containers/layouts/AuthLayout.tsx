import { Button, Grid, Paper, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../components/Logo";

const AuthLayout = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#E3F2FD" }}
    >
      <Box width={500}>
        <Paper
          elevation={1}
          sx={{
            width: "100%",
            p: 6,
            borderRadius: 2,
          }}
        >
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
};

export default AuthLayout;
