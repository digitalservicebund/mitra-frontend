const purgecss = require("@fullhuman/postcss-purgecss")
const autoprefixer = require("autoprefixer")
const tailwindcss = require("tailwindcss")

module.exports = {
  plugins: [
    purgecss({
      content: [
        "./index.html",
        "./src/**/*.vue",
        ...require("./collect-purgecss-content"),
      ],
      css: ["./src/theme.css"],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ""
        )
        return (
          contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
          []
        )
      },
      safelist: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/,
        /.*-\[.*\]/, // Arbitrary value support with Tailwind JIT, such as w-[762px]...
      ],
    }),
    tailwindcss(),
    autoprefixer(),
  ],
}
