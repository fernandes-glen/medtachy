/**
 * Application-level error with an attached HTTP status code.
 * Throw this from controllers/services to produce a clean error response.
 *
 * Usage:
 *   throw new ApiError(404, "Patient not found");
 */
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;
