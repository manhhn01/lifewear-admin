import { createTheme, PaletteColor } from "@mui/material";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#6F6F6F",
    },
    blue: {
      "100": "#E8F1FB",
      "200": "#D1E4F6",
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
          backgroundColor: "#FAFAFA",
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

type CustomTheme = typeof theme;

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["grey"];
  }

  interface PaletteOptions {
    blue: PaletteOptions["grey"];
  }
}

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
