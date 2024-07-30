import { FastifyInstance, FastifyServerOptions } from "fastify";
import { messageController } from "../controllers/index.js";

export default function messageRoute(
  instance: FastifyInstance,
  _options: FastifyServerOptions,
  done: Function
) {
  instance.post("/", messageController.boradcastMessage);
  done();
}
