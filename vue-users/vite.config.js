import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // 개발용 Server, 운영시 무력화
    port: 8099,
    proxy: {
      // 해당 정규표현식으로 시작하는 통신일 경우
      "^/fallback": {
        // 실제 요청을 보낼 서버 주소
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        // "/fallback" 부분을 제거하고 target 서버로 전달
        // 예:
        // 프론트에서 → /fallback/users
        // 실제 요청은 → https://jsonplaceholder.typicode.com/users
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
    },
  },
});
