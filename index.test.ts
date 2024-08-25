import { expect, test, describe } from "bun:test";
import app from "./app";

describe("Main Test", () => {
  test("GET /posts", async () => {
    const res = await app.request("/posts");
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ posts: "All Posts" });
  });
});
