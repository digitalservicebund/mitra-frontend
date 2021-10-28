import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testEnvironment: "jsdom",
}

export default config
