import fastify, { FastifyInstance } from "fastify";
import { fastifyConfig } from "./configs/index.js";

const app: FastifyInstance = fastify(fastifyConfig);

app.register(import("./app.js"));

app.listen(
  {
    port: process.env.SERVER_PORT as unknown as number,
    host: process.env.SERVER_HOST as string,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
