import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import type { IPostMessageBody } from "type-defs";
import { z } from "zod";
import { insertMessage } from "../models/index.js";

function boradcastMessage(
  this: FastifyInstance,
  req: FastifyRequest<{ Body: IPostMessageBody }>,
  res: FastifyReply
) {
  // Validate Body
  const bodySchema: z.ZodType<IPostMessageBody> = z.object({
    cookieId: z.string(),
    message: z.string(),
    createdAt: z.coerce.date(),
  });
  const bodyResult = bodySchema.safeParse(req.body);
  if (!bodyResult.success) {
    res.status(400).send({ error: bodyResult.error.issues });
    return;
  }

  // Insert data to database
  insertMessage(this.db, bodyResult.data).then(() => {
    // Pusher trigger
    this.pusher.trigger("private-common", "client-message", {
      senderId: bodyResult.data.cookieId,
      message: bodyResult.data.message,
    });
  });

  return res.status(201).send({
    payload: {
      message: req.body.message,
      cookieId: req.body.cookieId,
      createdAt: req.body.createdAt,
    },
  });
}

const messageController = {
  boradcastMessage,
};

export default messageController;
