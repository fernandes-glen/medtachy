const mongoose = require("mongoose");

/**
 * Initialize the MongoDB connection using Mongoose.
 *
 * The connection string is read from the MONGODB_URI environment variable
 * so credentials are never hardcoded. Connection lifecycle events are logged
 * so startup clearly indicates whether the database is reachable.
 *
 * @returns {Promise<boolean>} true if connected, false otherwise.
 */
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn(
      "[db] MONGODB_URI is not set. Backend will start without a database connection.",
    );
    return false;
  }

  // Log connection lifecycle events.
  mongoose.connection.on("connected", () => {
    console.log("[db] Mongoose connection established.");
  });
  mongoose.connection.on("error", (err) => {
    console.error(`[db] Mongoose connection error: ${err.message}`);
  });
  mongoose.connection.on("disconnected", () => {
    console.warn("[db] Mongoose connection disconnected.");
  });

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(
      `[db] ✅ MongoDB connected: ${conn.connection.host}/${conn.connection.name}`,
    );
    return true;
  } catch (error) {
    console.error(`[db] ❌ MongoDB connection failed: ${error.message}`);
    console.error(
      "[db] Backend will continue running, but database features are unavailable.",
    );
    return false;
  }
};

/**
 * Gracefully close the MongoDB connection (used on shutdown).
 */
const disconnectDB = async () => {
  await mongoose.connection.close();
  console.log("[db] MongoDB connection closed.");
};

module.exports = connectDB;
module.exports.connectDB = connectDB;
module.exports.disconnectDB = disconnectDB;
