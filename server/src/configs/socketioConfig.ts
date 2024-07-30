import { Server, ServerOptions } from "socket.io";

const socketioConfig: Partial<ServerOptions> = {
  cors: {
    origin: "*",
  },
  
};
