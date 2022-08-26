import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "build") {
    // command === 'build'
    return {
      plugins: [vue()],
      base: "./",
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("/src", import.meta.url)),
        },
      },
    };
  } else {
    // command === "serve" || command === "dev"
    return {
      plugins: [vue()],
      base: "/",
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
    };
  }
});

