const purgecss = require("@fullhuman/postcss-purgecss")
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")

module.exports = {
  plugins: [
    purgecss({
      content: [
        "./index.html",
        "./src/**/*.vue",
        "./node_modules/primevue/dialog/Dialog.vue",
        "./node_modules/primevue/inputtext/InputText.vue",
      ],
      css: ["./src/theme.css"],
    }),
    tailwindcss(),
    autoprefixer(),
  ],
}
