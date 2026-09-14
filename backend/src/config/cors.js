/**
 * CORS configuration for Medtachy.
 *
 * Allowed origins are driven by the CORS_ORIGINS environment variable
 * (comma-separated list). This keeps origins configurable per environment
 * and avoids allowing arbitrary origins in production.
 *
 * Examples:
 *   CORS_ORIGINS=http://localhost:5173,http://localhost:3000
 */

// Default development origins (Vite: 5173, CRA/legacy: 3000).
const DEFAULT_DEV_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:3000",
];

function getAllowedOrigins() {
  const fromEnv = process.env.CORS_ORIGINS || process.env.CLIENT_ORIGIN;

  if (fromEnv) {
    return fromEnv
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean);
  }

  // No env provided: fall back to dev defaults only in non-production.
  return process.env.NODE_ENV === "production" ? [] : DEFAULT_DEV_ORIGINS;
}

const allowedOrigins = getAllowedOrigins();

const corsOptions = {
  origin(origin, callback) {
    // Allow requests with no origin (e.g. curl, mobile apps, server-to-server).
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    const error = new Error(`Origin not allowed by CORS: ${origin}`);
    error.statusCode = 403;
    return callback(error);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = { corsOptions, getAllowedOrigins, allowedOrigins };
