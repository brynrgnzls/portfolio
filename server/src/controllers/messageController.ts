import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { insertMessage } from "../models/index.js";
import Pusher from "pusher";

async function boradcastMessage(
  this: FastifyInstance,
  req: FastifyRequest<{ Body: IPostMessageBody }>,
  res: FastifyReply
) {
  // Validate Body
  const bodySchema: z.ZodType<IPostMessageBody> = z.object({
    cookieId: z.string(),
    message: z.string(),
    createdAt: z.string(),
  });
  const bodyResult = bodySchema.safeParse(req.body);
  if (!bodyResult.success) {
    res.status(400).send({ error: bodyResult.error.issues });
    return;
  }

  try {
    // Insert data to database
    insertMessage(this.db, bodyResult.data).then((data) => {
      console.log("MessageInserted");
    });

    // Broadcast message to all clients

    await this.pusher.trigger("private-common", "message", {
      senderId: bodyResult.data.cookieId,
      message: bodyResult.data.message,
    });
  } catch (error) {
    console.error(error);
  }

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

interface IPostMessageBody {
  cookieId: string;
  message: string;
  createdAt: string;
}
