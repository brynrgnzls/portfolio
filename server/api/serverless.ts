import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import Routes from "../src/app.js";

const app = Fastify({ logger: false });

app.get("/", async (req, res) => {
  return res.status(200).send({ ServerStatus: "Running" });
});

app.register(Routes, { prefix: "/" });

export default async function handler(req: FastifyRequest, res: FastifyReply) {
  await app.ready();
  app.server.emit("request", req, res);
}
