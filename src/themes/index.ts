import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#6F6F6F",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fieldset: {
            borderRadius: "16px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "unset",
          padding: "10px 16px",
          fontSize: "16px",
          lineHeight: "24px",
          borderRadius: "12px",
        },
      },
    },
  },
});
