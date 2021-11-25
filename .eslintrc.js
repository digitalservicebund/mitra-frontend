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
        "plugin:vue/vue3-recommended",
        "plugin:vuejs-accessibility/recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
      ],
    },
    // ...and avoid linting Vue/TypeScript files with ES rules for JavaScript config files!
    {
      files: ["**/*.js"],
      extends: ["eslint:recommended"],
    },
  ],
}
