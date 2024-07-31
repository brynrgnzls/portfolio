import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import Routes from "../src/app.js";

const app = Fastify({
  logger: true,
});

app.get("/", async (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

app.register(Routes, { prefix: "/" });

export default async (req: FastifyRequest, res: FastifyReply) => {
  await app.ready();
  app.server.emit("request", req, res);
};
