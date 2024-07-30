import { FastifyInstance, FastifyServerOptions } from "fastify";
import pusherController from "src/controllers/pusherController.js";

export default function PuhserRoute(
  instance: FastifyInstance,
  _option: FastifyServerOptions,
  done: Function
) {
  instance.get("/user-auth", pusherController.userAuth);
  instance.get("/channel-auth", pusherController.channelAuth);
  done();
}
