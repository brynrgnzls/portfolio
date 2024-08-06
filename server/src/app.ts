import { FastifyServerOptions } from "fastify";
import { fastifyCorsConfig } from "./configs/index.js";
import type { MyFastifyInstance } from "./@types/my-fastsify.js";
import { MongoDbConnector } from "./models/index.js";
import Pusher from "pusher";

export default async function Routes(
  instance: MyFastifyInstance,
  _opts: FastifyServerOptions,
  done: Function
) {
  instance.register(import("@fastify/cors"), fastifyCorsConfig);

  instance.decorate("db", await MongoDbConnector.getDbInstance());
  instance.decorate(
    "pusher",
    new Pusher({
      appId: process.env.PUSHER_APP_ID!,
      key: process.env.PUSHER_KEY!,
      secret: process.env.PUSHER_SECRET!,
      cluster: process.env.PUSHER_CLUSTER!,
      useTLS: true,
    })
  );

  instance.addHook("onError", (req, res, error, done) => {
    console.error(error);
    done();
  });

  instance.register(import("./routes/messageRoute.js"), { prefix: "/message" });
  instance.register(import("./routes/pusherRoute.js"), { prefix: "/pusher" });

  instance.get("/adiibels", async (req, res) => {
    return res.send({
      puhser: instance.pusher,
      DBpring: instance.db.command({ ping: 1 }),
    });
  });

  done();
}
