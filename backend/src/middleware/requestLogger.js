/**
 * Simple request logging middleware.
 * Logs method, path, status code, and response time for every request.
 */
function requestLogger(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[http] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`,
    );
  });

  next();
}

module.exports = requestLogger;
