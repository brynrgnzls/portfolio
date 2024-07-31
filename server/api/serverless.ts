import Fastify, { FastifyRegister, FastifyRequest } from "fastify";
import routes from "../src/app.js";
import { MyFastifyInstance } from "src/@types/my-fastsify.js";

const app: MyFastifyInstance = Fastify({
  logger: false,
});

app.register(routes, { prefix: "/ping" });

app.get("/", async (req, res) => {
  app.pusher.trigger("test-channel", "test-event", { ping: "pong" });
  const dbAck = (await app.db.collection("test").insertOne({ hello: "world" }))
    .acknowledged;

  return res.send({ hello: "world", dbAck });
});

// ======= ENDPOINTS ======= //

export default async (req: FastifyRequest, res: FastifyRegister) => {
  await app.ready();
  app.server.emit("request", req, res);
};
