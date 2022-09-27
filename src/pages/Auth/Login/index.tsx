import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../../components/Logo";
import { theme } from "../../../themes";

const LoginPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          mb: 4,
        }}
      >
        <Logo />
      </Box>
      <Box mb={5}>
        <Typography
          variant="h2"
          textAlign="center"
          fontSize="26px"
          fontWeight="bold"
          mb={1.5}
          color={theme.palette.primary.main}
        >
          Welcome back!
        </Typography>
        <Typography textAlign="center" color={theme.palette.secondary.main}>
          Enter your credentials to continue
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={2} mb={1}>
        <TextField label="Username" fullWidth />
        <TextField label="Password" type="password" fullWidth />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Link component={RouterLink} to="/auth/forgot-password">
          Forgot password?
        </Link>
      </Box>
      <Button variant="contained" fullWidth>
        Login
      </Button>
    </>
  );
};

export default LoginPage;
