const { MongoMemoryServer } = require("mongodb-memory-server");
const connectDB = require("../src/config/database");
const { disconnectDB } = require("../src/config/database");

(async () => {
  const mongod = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongod.getUri();
  console.log("[test] Using in-memory MongoDB:", process.env.MONGODB_URI);

  const ok = await connectDB();
  console.log("[test] connectDB returned:", ok);

  await disconnectDB();
  await mongod.stop();
  process.exit(ok ? 0 : 1);
})();
