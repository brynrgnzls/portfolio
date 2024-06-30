import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
  return {
    plugins: [react()],
    mode: "development",
    build: {
      rollupOptions: {
        output: {
          dir: "build",
        },
      },
    },
  };
});
