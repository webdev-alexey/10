import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "./../dist",
    emptyOutDir: true,
  },
  publicDir: "./../public",
  plugins: [injectHTML()],
});
