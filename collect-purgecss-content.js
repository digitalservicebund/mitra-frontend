// Searches all our own *.vue components for `import` statements that
// reference PrimeVue components and translates them into references to
// ./node_modules/primevue/xxx, so that PurgeCSS can find them.
const fs = require("fs")
const { exit } = require("process")
const glob = require("glob")

const primeVueComponentsDir = "./node_modules/primevue"
if (!fs.existsSync(primeVueComponentsDir)) {
  console.log(`Specified directory: ${primeVueComponentsDir} does not exist`)
  exit(1)
}

const componentsDir = "src/components"
if (!fs.existsSync(componentsDir)) {
  console.log(`Specified directory: ${componentsDir} does not exist`)
  exit(1)
}

const importStatementRegexp = /import .+ from "primevue\/(.+)"/g
const lookup = glob
  .sync(`${componentsDir}/**/*.vue`)
  .map((path) => fs.readFileSync(path, "utf8"))
  .flatMap((content) => [...content.matchAll(importStatementRegexp)])
  .flatMap((match) => match.slice(1, 2)) // pick the capturing group from the match

const pathPartRegexp = new RegExp(`/(${lookup.join("|")})/`)
const nodeModulePaths = glob
  .sync(`${primeVueComponentsDir}/**/*.vue`)
  .filter((path) => pathPartRegexp.test(path)) // path must be included in our lookup

module.exports = nodeModulePaths
