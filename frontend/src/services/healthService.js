import apiClient from "./apiClient";

/**
 * Health-related API calls.
 */
export function getHealth() {
  return apiClient("/api/health");
}
