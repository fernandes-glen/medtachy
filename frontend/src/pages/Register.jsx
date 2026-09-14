import React from "react";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * Placeholder Register page (no authentication implemented yet — Story 1.11).
 */
function Register() {
  return (
    <Container maxWidth="xs" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Authentication is not implemented yet. This is a placeholder page.
        </Typography>

        <Box component="form" sx={{ mt: 2 }} noValidate>
          <TextField label="Full name" fullWidth margin="normal" disabled />
          <TextField label="Email" type="email" fullWidth margin="normal" disabled />
          <TextField label="Password" type="password" fullWidth margin="normal" disabled />
          <Button variant="contained" fullWidth sx={{ mt: 2 }} disabled>
            Create Account
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <RouterLink to="/login">Login</RouterLink>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Register;
