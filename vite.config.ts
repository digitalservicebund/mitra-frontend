import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import handlebars from "vite-plugin-handlebars"
import pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    handlebars(),
    pages({
      pagesDir: [{ dir: "src/pages", baseRoute: "mitra-frontend" }],
    }),
  ],
  base: "/mitra-frontend/",
  server: {
    watch: {
      ignored: ["**/coverage/**"],
    },
  },
})
