/**
 * End-to-end development environment verification (Story 1.15).
 *
 * Flow:
 *   Start MongoDB (in-memory) → Start Backend → MongoDB Connected →
 *   Express Running → GET /api/health → 200 OK
 *
 * Uses mongodb-memory-server to run a REAL MongoDB instance so the full
 * Mongoose connection path is exercised without a system install.
 */
const path = require("path");
const http = require("http");
const { MongoMemoryServer } = require("mongodb-memory-server");

const results = [];
function check(label, ok, detail = "") {
  results.push({ label, ok });
  console.log(`${ok ? "✅" : "❌"} ${label}${detail ? ` — ${detail}` : ""}`);
}

function get(port, path_, headers = {}) {
  return new Promise((resolve, reject) => {
    http
      .get({ host: "127.0.0.1", port, path: path_, headers }, (res) => {
        let body = "";
        res.on("data", (c) => (body += c));
        res.on("end", () =>
          resolve({ status: res.statusCode, headers: res.headers, body }),
        );
      })
      .on("error", reject);
  });
}

(async () => {
  // 1. Start MongoDB
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  process.env.MONGODB_URI = uri;
  process.env.PORT = "5055";
  process.env.CORS_ORIGINS = "http://localhost:5173,http://localhost:3000";
  check("MongoDB is running", true, uri);

  // 2. Start Backend (connect + listen)
  const connectDB = require(path.resolve(__dirname, "../src/config/database"));
  const app = require(path.resolve(__dirname, "../src/app"));

  const connected = await connectDB();
  check("Backend connects to MongoDB", connected === true);

  const mongoose = require("mongoose");
  check(
    "Mongoose readyState is 'connected'",
    mongoose.connection.readyState === 1,
    `readyState=${mongoose.connection.readyState}`,
  );

  const server = app.listen(Number(process.env.PORT));
  await new Promise((r) => server.once("listening", r));
  check("Express is running", server.listening, `port ${process.env.PORT}`);

  // 3. GET /api/health → 200 OK
  const health = await get(process.env.PORT, "/api/health");
  const payload = JSON.parse(health.body);
  check("/api/health returns 200", health.status === 200);
  check(
    "Health payload has status OK + message",
    payload.status === "OK" && !!payload.message,
    JSON.stringify(payload),
  );
  check(
    "Health reports database connected",
    payload.database === "connected",
    `database=${payload.database}`,
  );

  // 4. CORS allows the frontend origin
  const cors = await get(process.env.PORT, "/api/health", {
    Origin: "http://localhost:5173",
  });
  check(
    "CORS allows frontend origin (5173)",
    cors.headers["access-control-allow-origin"] === "http://localhost:5173",
  );

  // Cleanup
  server.close();
  await mongoose.connection.close();
  await mongod.stop();

  const passed = results.filter((r) => r.ok).length;
  const total = results.length;
  console.log(`\n${passed}/${total} checks passed`);
  process.exit(passed === total ? 0 : 1);
})().catch((err) => {
  console.error("❌ Verification crashed:", err);
  process.exit(1);
});
