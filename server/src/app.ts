import { FastifyServerOptions } from "fastify";
import { fastifyCorsConfig } from "./configs/index.js";
import type { MyFastifyInstance } from "./@types/my-fastsify.js";

export default async function Routes(
  instance: MyFastifyInstance,
  _opts: FastifyServerOptions,
  done: Function
) {
  instance.register(import("@fastify/cors"), fastifyCorsConfig);

  // instance.decorate("db", await MongoDbConnector.getDbInstance());
  // instance.decorate("pusher", pusher);

  // instance.addHook("onError", (req, res, error, done) => {
  //   console.error(error);
  //   done();
  // });

  // instance.register(import("./routes/messageRoute.js"), { prefix: "/message" });
  // instance.register(import("./routes/pusherRoute.js"), { prefix: "/pusher" });

  instance.get("/test", async (req, res) => {
    return res.send({ "Hello World": "Hello Test" });
  });

  done();
}
