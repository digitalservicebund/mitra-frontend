module.exports = {
  extends: ["../.eslintrc.js"],
  overrides: [
    {
      files: ["**/*.ts"],
      excludedFiles: "e2e/**/*.ts",
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/vue"],
    },
    {
      files: ["e2e/**/*.ts"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
}
