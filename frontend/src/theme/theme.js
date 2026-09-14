import { createTheme } from "@mui/material/styles";

/**
 * Centralized Material UI theme for Medtachy.
 *
 * All global design tokens — colors, typography, spacing, shape, and
 * base component styling — are defined here so the UI stays consistent
 * and feature components never hardcode theme values.
 */
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#dc004e",
      light: "#ff5c8d",
      dark: "#a30022",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a2027",
      secondary: "#4b5563",
    },
  },

  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    h3: { fontSize: "1.75rem", fontWeight: 600 },
    h4: { fontSize: "1.5rem", fontWeight: 600 },
    h5: { fontSize: "1.25rem", fontWeight: 600 },
    h6: { fontSize: "1.1rem", fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingInline: 20,
        },
      },
    },
  },
});

export default theme;
