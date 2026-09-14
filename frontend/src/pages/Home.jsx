import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useHealth } from "../hooks/useHealth";
import HealthStatus from "../components/HealthStatus";

function Home() {
  const { health, error, loading } = useHealth();

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Medtachy
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Healthcare management platform for beds, caretakers, appointments, and
          emergency services.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Backend status:
          </Typography>
          <HealthStatus health={health} error={error} loading={loading} />
        </Box>
      </Paper>
    </Container>
  );
}

export default Home;
