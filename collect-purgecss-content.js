// Searches all our own *.vue components for `import` statements that
// reference PrimeVue components and translates them into references to
// ./node_modules/primevue/xxx, so that PurgeCSS can find them.
const fs = require("fs")
const { exit } = require("process")
const glob = require("glob")

const componentsDir = "src/components"
if (!fs.existsSync(componentsDir)) {
  console.log(`Specified directory: ${componentsDir} does not exist`)
  exit(1)
}

const componentsPaths = glob.sync("src/components/**/*.vue")
const regexp = /import (.+) from "primevue\/(.+)"/g
const nodeModulePaths = componentsPaths
  .map((path) => fs.readFileSync(path, "utf8"))
  .map((content) => [...content.matchAll(regexp)])
  .reduce((memo, current) => memo.concat(current), [])
  .map((match) => match[0])
  .map((statement) =>
    statement.replace(regexp, "./node_modules/primevue/$2/$1.vue")
  )

module.exports = nodeModulePaths
