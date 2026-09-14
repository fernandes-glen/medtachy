/**
 * In-process CORS verification using Node's http + the Express app.
 * Confirms allowed origins pass and disallowed origins are blocked.
 */
process.env.CORS_ORIGINS = "http://localhost:5173,http://localhost:3000";

const http = require("http");
const app = require("../src/app");

const server = app.listen(0, () => {
  const { port } = server.address();

  const request = (origin) =>
    new Promise((resolve) => {
      const headers = origin ? { Origin: origin } : {};
      http.get(
        { host: "127.0.0.1", port, path: "/api/health", headers },
        (res) => {
          resolve({
            status: res.statusCode,
            acao: res.headers["access-control-allow-origin"] || "(none)",
          });
        },
      );
    });

  (async () => {
    const allowed = await request("http://localhost:5173");
    const disallowed = await request("http://evil.com");
    const noOrigin = await request(null);

    console.log("Allowed origin (5173):   ", allowed);
    console.log("Disallowed origin (evil):", disallowed);
    console.log("No origin (curl-like):   ", noOrigin);

    const pass =
      allowed.acao === "http://localhost:5173" &&
      disallowed.acao === "(none)" &&
      disallowed.status === 403 &&
      noOrigin.status === 200;

    console.log(pass ? "\n✅ CORS verification PASSED" : "\n❌ CORS FAILED");
    server.close();
    process.exit(pass ? 0 : 1);
  })();
});
