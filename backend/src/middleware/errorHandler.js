/**
 * 404 handler for unmatched routes.
 */
function notFound(req, res, next) {
  res.status(404).json({
    status: "error",
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

/**
 * Centralized error-handling middleware.
 * Any error passed to next(err) is formatted here into a consistent response.
 */
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  console.error(`[error] ${statusCode} - ${err.message}`);

  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
}

module.exports = { notFound, errorHandler };
