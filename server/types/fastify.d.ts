import { Db } from "mongodb";

declare module "fastify" {
  interface FastifyRequest {
    db: Db;
  }
}
