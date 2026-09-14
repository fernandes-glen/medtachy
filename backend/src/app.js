const express = require('express');
const cors = require('cors');

const healthRoutes = require('./routes/healthRoutes');

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || '*',
  })
);
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Medtachy API' });
});

app.use('/api', healthRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

module.exports = app;
