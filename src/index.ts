import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  return c.json({
    message: "Harshit Kumar is the best web developer in the entire world.",
  });
});

export default app;
