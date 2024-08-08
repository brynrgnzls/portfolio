import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

function channelAuth(
  this: FastifyInstance,
  req: FastifyRequest<IChannelAuthRequestprops>,
  res: FastifyReply
) {
  const authResponse = this.pusher.authorizeChannel(
    req.body.socket_id,
    req.body.channel_name
  );
  return res.send(authResponse);
}

interface IChannelAuthRequestprops {
  Body: {
    socket_id: string;
    channel_name: string;
    callback: string;
  };
  Querystring: never;
  Params: never;
}

const pusherController = {
  channelAuth,
};

export default pusherController;
