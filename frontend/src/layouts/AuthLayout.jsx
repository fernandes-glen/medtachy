import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * AuthLayout — minimal, centered layout for authentication pages
 * (login, register). Displays the Medtachy brand above the page content.
 *
 *        Medtachy
 *           │
 *           ▼
 *       Page Content
 */
function AuthLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        py: 6,
      }}
    >
      <Typography
        variant="h3"
        component={RouterLink}
        to="/"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: "primary.main",
          textDecoration: "none",
        }}
      >
        Medtachy
      </Typography>

      <Container maxWidth="xs">{children}</Container>
    </Box>
  );
}

export default AuthLayout;
