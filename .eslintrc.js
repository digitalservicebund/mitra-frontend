// See https://github.com/import-js/eslint-plugin-import
const moduleImportRules = {
  "import/exports-last": 2,
  "import/first": 2,
  "import/newline-after-import": 2,
  "import/no-duplicates": 2,
  "import/order": [
    "error",
    {
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
}

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  overrides: [
    // Avoid linting JavaScript config files with Vue/TypeScript rules...
    {
      files: ["**/*.{ts,vue}"],
      extends: [
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:vue/vue3-recommended",
        "plugin:vuejs-accessibility/recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/eslint-config-prettier",
      ],
      rules: { ...moduleImportRules },
    },
    // ...and avoid linting Vue/TypeScript files with ES rules for JavaScript config files!
    {
      files: ["**/*.js"],
      extends: ["eslint:recommended", "plugin:import/recommended"],
      rules: { ...moduleImportRules },
    },
  ],
}
