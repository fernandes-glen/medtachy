/**
 * Centralized API configuration for the Medtachy frontend.
 *
 * All backend communication flows through this module so the base URL and
 * request logic live in one place — never hardcoded across components.
 *
 * - In development, requests are proxied to the backend via Vite
 *   (see vite.config.js), so API_BASE_URL can stay empty.
 * - In production, set VITE_API_URL to the deployed backend origin.
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL || "";

/**
 * Core request helper. Prefixes the base URL and applies JSON defaults.
 *
 * @param {string} path - API path beginning with "/" (e.g. "/api/health").
 * @param {RequestInit} [options] - Optional fetch options.
 * @returns {Promise<any>} Parsed JSON response.
 */
export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export default apiRequest;
