import { Db } from "mongodb";
import Pusher from "pusher";

declare module "fastify" {
  export interface FastifyInstance {
    db: Db;
    pusher: Pusher;
  }
}

export declare interface test {
  test: string;
  jupiter: number;
}
