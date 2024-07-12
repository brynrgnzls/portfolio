import fastify from "fastify";

import requestDecorators from "./hooks/requestDecorators";

const app = fastify();

// ====== CORE PLUGINS ====== //

// ======= DECORATORS =======//
app.decorateRequest("db", null);

// ======= HOOKS ======= //
app.addHook("preHandler", requestDecorators);
app.addHook("onError", async (request, reply, error) => {
  console.error(error);
});

// ======= ENDPOINTS ======= //

app.get("/test", async (request, reply) => {
  request.db.collection("test").insertOne({ test: "test" });
  return "Hello World!";
});

app.listen(
  {
    port: process.env.SERVER_PORT as unknown as number,
    host: process.env.SERVER_HOST as string,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
