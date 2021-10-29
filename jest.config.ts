import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/test/e2e"],
  collectCoverageFrom: [
    "src/**/*.{ts,vue}",
    "!src/main.ts", // No need to cover bootstrap file
    "!**/*.d.ts",
  ],
}

export default config
