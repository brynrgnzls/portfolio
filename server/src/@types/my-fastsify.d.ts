import { Db } from "mongodb";
import Pusher from "pusher";
import { FastifyInstance } from "fastify";

declare module "fastify" {
  export interface FastifyInstance {
    db: Db;
    pusher: Pusher;
  }
}

interface MyFastifyInstance extends FastifyInstance {
  db: Db;
  pusher: Pusher;
}
