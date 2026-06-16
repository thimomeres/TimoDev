import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const guardianParams = new URLSearchParams({
    "api-key": env.GUARDIAN_API_KEY || env.VITE_GUARDIAN_API_KEY || "",
    q: "law OR legal OR court OR justice OR lawyer",
    "page-size": "30",
    "show-fields": "thumbnail,trailText,standfirst,headline",
    "order-by": "newest",
  });

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/api/news": {
          target: "https://content.guardianapis.com",
          changeOrigin: true,
          rewrite: () => `/search?${guardianParams.toString()}`,
        },
      },
    },
  };
});
