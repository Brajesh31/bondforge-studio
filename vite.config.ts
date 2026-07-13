import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Setting this to false or removing the server config
    // forces Vite to output static HTML files.
    server: {
      preset: "static"
    },
  },
});