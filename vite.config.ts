import { defineConfig } from "vite";
import { tempo } from "tempo-devtools/dist/vite";

export default defineConfig({
  plugins: [tempo()],
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
  },
});
