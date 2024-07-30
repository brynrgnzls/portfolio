import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const fastifyConfig = {
  http2: true,
  http2SessionTimeout: 30000,
  https: {
    allowHTTP1: true,
    key: readFileSync(resolve(`${import.meta.dirname}`, "../../private/cert.key")),
    cert: readFileSync(resolve(`${import.meta.dirname}`, "../../private/cert.crt")),
  },
};

export default fastifyConfig;