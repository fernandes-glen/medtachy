import React from "react";
import { Container, Typography } from "@mui/material";

function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        404 — Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary">
        The page you are looking for does not exist.
      </Typography>
    </Container>
  );
}

export default NotFound;
