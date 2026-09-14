import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

/**
 * Placeholder Dashboard page (Story 1.11).
 * Future home for beds, caretakers, appointments, and emergency services.
 */
function Dashboard() {
  const cards = [
    "Hospital Beds",
    "Caretakers",
    "Appointments",
    "Emergency Services",
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Placeholder dashboard. Feature modules will appear here.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {cards.map((title) => (
          <Grid item xs={12} sm={6} key={title}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6">{title}</Typography>
              <Typography variant="body2" color="text.secondary">
                Coming soon.
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Dashboard;
