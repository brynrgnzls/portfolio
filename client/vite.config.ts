import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    plugins: [react()],
    mode: "development",
    resolve: {
      alias: {
        "~": `${path.resolve(__dirname, "./node_modules")}`,
      },
    },
    build: {
      rollupOptions: {
        output: {
          compact: true,
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
            "react-router-dom": ["react-router-dom"],
            axios: ["axios"],
            "pusher-js": ["pusher-js"],
            uuid: ["uuid"],
            particle: [
              "@tsparticles/engine",
              "@tsparticles/react",
              "@tsparticles/slim",
            ],
          },
        },
      },
    },
    server: {
      port: Number(env.CLIENT_PORT) || 1010,
      host: env.CLIENT_HOST ?? "127.1.1.1",
    },

    define: {
      "process.env.PUSHER_APP_KEY": JSON.stringify(env.PUSHER_APP_KEY),
      "process.env.CLIENT_HOST": JSON.stringify(env.CLIENT_HOST),
      "process.env.CLIENT_PORT": JSON.stringify(env.CLIENT_PORT),
      "process.env.SERVER_HOST": JSON.stringify(env.SERVER_HOST),
      "process.env.SERVER_PORT": JSON.stringify(env.SERVER_PORT),
      "process.env.SERVER_BASE_URL": JSON.stringify(env.SERVER_BASE_URL),
    },
  });
});
