module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  overrides: [
    // Cannot lint JavaScript config files with TypeScript rules...
    {
      files: ["**/*.{ts,vue}"],
      env: {
        node: true,
      },
      extends: [
        "plugin:vue/vue3-recommended",
        "plugin:vuejs-accessibility/recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
      ],
    },
  ],
}
