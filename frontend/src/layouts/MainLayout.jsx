import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

/**
 * Main application layout: top navigation bar + page content area.
 * Shared chrome for all routed pages lives here.
 */
function MainLayout({ children }) {
  const { appName } = useAppContext();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Dashboard", to: "/dashboard" },
    { label: "Login", to: "/login" },
    { label: "Register", to: "/register" },
  ];

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
          >
            {appName}
          </Typography>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              color="inherit"
              component={RouterLink}
              to={link.to}
            >
              {link.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Box component="main">{children}</Box>
    </Box>
  );
}

export default MainLayout;
