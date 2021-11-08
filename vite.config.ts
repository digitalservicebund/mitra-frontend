import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import handlebars from "vite-plugin-handlebars"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), handlebars()],
  base: "/mitra-frontend/",
  server: {
    watch: {
      ignored: ["**/coverage/**"],
    },
  },
})
