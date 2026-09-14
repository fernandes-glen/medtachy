import apiRequest from "./api";

/**
 * Health-related API calls.
 */
export function getHealth() {
  return apiRequest("/api/health");
}
