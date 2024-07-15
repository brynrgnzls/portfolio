import { FastifyReply, FastifyRequest } from "fastify";
import MongoDbConnector from "../model/mongoDbConnector";

export default async function (req: FastifyRequest, _reply: FastifyReply) {
  req.db = await MongoDbConnector.getDbInstance();
}
