import React from "react";
import { Chip } from "@mui/material";

/**
 * Reusable chip that reflects the backend health status.
 */
function HealthStatus({ health, error, loading }) {
  if (error) return <Chip label={error} color="error" />;
  if (loading || !health) return <Chip label="Checking..." />;
  return (
    <Chip
      label={`${health.status} · db: ${health.database}`}
      color="success"
    />
  );
}

export default HealthStatus;
