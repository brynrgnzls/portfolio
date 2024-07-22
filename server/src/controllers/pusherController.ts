import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";

function userAuth(
  this: FastifyInstance,
  req: FastifyRequest<IUserAuthRequestProps>,
  res: FastifyReply
) {
  const { socket_id } = req.query;

  const user = {
    id: "some_id",
    user_info: {
      name: "John Smith",
    },
    watchlist: ["another_id_1", "another_id_2"],
  };

  const authResponse = this.pusher.authenticateUser(socket_id, user);

  return res.send(authResponse);
}

function channelAuth(
  this: FastifyInstance,
  req: FastifyRequest<IChannelAuthRequestprops>,
  res: FastifyReply
) {
  const { socket_id, channel_name, callback } = req.query;

  const auth = JSON.stringify(
    this.pusher.authorizeChannel(socket_id, channel_name)
  );

  if (channel_name === "private-common") {
    const cb = callback.replace(/\\"/g, "") + "(" + auth + ");";
    return res.header("Content-Type", "application/javascript").send(cb);
  }

  return res.code(500).send({ error: "Server Unconfigured" });
}

interface IUserAuthRequestProps {
  Body: never;
  Querystring: {
    socket_id: string;
    channel_name: string;
    callback: string;
  };
  Params: never;
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
  userAuth,
  channelAuth,
};

export default pusherController;
