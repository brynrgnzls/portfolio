import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

function channelAuth(
  this: FastifyInstance,
  req: FastifyRequest<IChannelAuthRequestprops>,
  res: FastifyReply
) {
  const { socket_id, channel_name, callback } = req.query;

  const auth = JSON.stringify(
    this.pusher.authorizeChannel(socket_id, channel_name)
  const authResponse = this.pusher.authorizeChannel(
    req.body.socket_id,
    req.body.channel_name
  );

  if (channel_name === "private-common") {
    const cb = callback.replace(/\\"/g, "") + "(" + auth + ");";
    return res.header("Content-Type", "application/javascript").send(cb);
  }

  return res.code(500).send({ error: "Server Unconfigured" });
}

}

interface IChannelAuthRequestprops {
  Body: never;
  Querystring: {
    socket_id: string;
    channel_name: string;
    callback: string;
  };
  Params: never;
}

const pusherController = {
  channelAuth,
};

export default pusherController;
