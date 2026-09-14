const mongoose = require("mongoose");

/**
 * Basic health-check endpoint.
 * Returns service status, uptime, and the current database connection state.
 */
const getHealth = (req, res) => {
  const dbStates = ["disconnected", "connected", "connecting", "disconnecting"];

  res.status(200).json({
    status: "ok",
    service: "medtachy-backend",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: dbStates[mongoose.connection.readyState] || "unknown",
  });
};

module.exports = { getHealth };
