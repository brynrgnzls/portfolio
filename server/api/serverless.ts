import Fastify, {
  FastifyInstance,
  FastifyRegister,
  FastifyRequest,
} from "fastify";
import routes from "../src/app.js";

const app: FastifyInstance = Fastify({
  logger: false,
});

app.register(routes, { prefix: "/" });

// ======= ENDPOINTS ======= //

export default async (req: FastifyRequest, res: FastifyRegister) => {
  await app.ready();
  app.server.emit("request", req, res);
};
