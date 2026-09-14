import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Chip,
  Container,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';

function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch(() => setError('Unable to reach backend'));
  }, []);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Medtachy
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Medtachy
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Healthcare management platform for beds, caretakers, appointments,
            and emergency services.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Backend status:
            </Typography>
            {error && <Chip label={error} color="error" />}
            {!error && health && (
              <Chip
                label={`${health.status} · db: ${health.database}`}
                color="success"
              />
            )}
            {!error && !health && <Chip label="Checking..." />}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
