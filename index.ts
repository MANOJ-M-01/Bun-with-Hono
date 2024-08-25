import app from "./app";

const PORT = process.env.PORT || 3000;

const server = Bun.serve({
  fetch: app.fetch,
  port: PORT,
});

console.log(`Listening on ${server.url}`);
