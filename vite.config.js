import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/rozmarynkowa-pasieka/" : "/",
  plugins: [react()],
  server: {
    port: 5191,
    strictPort: true,
    host: true,
  },
});
