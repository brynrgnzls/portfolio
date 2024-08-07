import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import Routes from "../src/app.js";

const app = Fastify();

app.get("/", async (req, res) => {
  return res.status(200).send({ message: "Hello Portfolio-server @new" });
});

app.register(Routes, { prefix: "/" });

export default async function handler(req: FastifyRequest, res: FastifyReply) {
  await app.ready();
  app.server.emit("request", req, res);
}
