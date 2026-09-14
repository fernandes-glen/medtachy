/**
 * Generic utility helpers shared across the frontend.
 */

export function formatUptime(seconds) {
  if (seconds == null) return "—";
  const s = Math.floor(seconds % 60);
  const m = Math.floor((seconds / 60) % 60);
  const h = Math.floor(seconds / 3600);
  return `${h}h ${m}m ${s}s`;
}
