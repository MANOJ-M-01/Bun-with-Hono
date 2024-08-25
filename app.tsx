import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

app.use("*", logger());

app.get("/", (c) => {
  return c.json({ message: "Hello, Express with Bun!" });
});

app.get("/posts", (c) => {
  return c.json({ posts: "All Posts" });
});

export default app;
