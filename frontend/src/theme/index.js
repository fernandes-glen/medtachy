import { createTheme } from "@mui/material/styles";

/**
 * Central Material UI theme configuration for Medtachy.
 * Extend palette, typography, and component overrides here.
 */
const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
    background: { default: "#f5f7fa" },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
});

export default theme;
