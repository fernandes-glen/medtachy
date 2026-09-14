import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useAppContext } from "../context/AppContext";

/**
 * Main application layout: top navigation bar + page content area.
 * Shared chrome for all routed pages lives here.
 */
function MainLayout({ children }) {
  const { appName } = useAppContext();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            {appName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main">{children}</Box>
    </Box>
  );
}

export default MainLayout;
