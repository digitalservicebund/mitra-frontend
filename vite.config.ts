import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pages({
      pagesDir: [{ dir: "src/routes", baseRoute: "mitra-frontend" }],
    }),
  ],
  base: "/mitra-frontend/",
  server: {
    watch: {
      ignored: ["**/coverage/**", "**/.lighthouseci/**"],
    },
  },
})
