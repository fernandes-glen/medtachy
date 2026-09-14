const { getHealthStatus } = require("../services/healthService");

/**
 * Basic health-check endpoint.
 * Delegates to the health service and returns the status payload.
 */
const getHealth = (req, res) => {
  res.status(200).json(getHealthStatus());
};

module.exports = { getHealth };
