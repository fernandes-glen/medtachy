/**
 * Base API client for the Medtachy backend.
 * Uses the Vite dev-server proxy (see vite.config.js),
 * or VITE_API_URL when provided (e.g. in production builds).
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

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
