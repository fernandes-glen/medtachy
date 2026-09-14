const mongoose = require("mongoose");

/**
 * Service layer for health/status information.
 * Business logic lives in services; controllers stay thin.
 */
function getHealthStatus() {
  const dbStates = ["disconnected", "connected", "connecting", "disconnecting"];

  return {
    status: "ok",
    service: "medtachy-backend",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: dbStates[mongoose.connection.readyState] || "unknown",
  };
}

module.exports = { getHealthStatus };
