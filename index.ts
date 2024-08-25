import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

app.use("*", logger());
app.get("/", (c) => {
  return c.json({ message: "Hello, Express with Bun!" });
});

const PORT = 3000;

const server = Bun.serve({
  fetch: app.fetch,
  port: PORT,
});

console.log(`Listening on ${server.url}`);
