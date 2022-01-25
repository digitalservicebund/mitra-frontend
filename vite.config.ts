import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import handlebars from "vite-plugin-handlebars"
import pages from "vite-plugin-pages"
import virtualHtml from "vite-plugin-virtual-html"

const base = "mitra-frontend"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    handlebars(),
    pages({
      pagesDir: [{ dir: "src/routes", baseRoute: base }],
    }),
    virtualHtml({
      pages: {
        index: `./${base}/index.html`,
        einkauf: `./${base}/index.html`,
        creator: `./${base}/index.html`,
      },
    }),
  ],
  base: `/${base}/`,
  server: {
    watch: {
      ignored: ["**/coverage/**", "**/.lighthouseci/**"],
    },
  },
})
