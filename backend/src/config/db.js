const mongoose = require("mongoose");

/**
 * Connect to MongoDB using the MONGO_URI environment variable.
 * The server can still start if the connection fails so that the
 * health-check endpoint remains available during local development.
 */
const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn("[db] MONGO_URI not set. Skipping MongoDB connection.");
    return;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`[db] MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[db] MongoDB connection error: ${error.message}`);
  }
};

module.exports = connectDB;
