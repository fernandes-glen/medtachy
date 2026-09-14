const express = require("express");
const cors = require("cors");

const requestLogger = require("./middleware/requestLogger");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

// Global middleware
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "*",
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Medtachy API" });
});

app.use("/api", healthRoutes);

// 404 + error handling (must be last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
