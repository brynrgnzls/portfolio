import fastify from "fastify";

const app = fastify();

app.register(import("../app"));

export default async function (req, res) {
  await app.ready();
  app.server.emit("request", req, res);
}
