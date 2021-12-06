import { devices, PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testDir: "./test/e2e",
  testIgnore: ["**/contract.spec.ts"],
  timeout: 10000,
  retries: 1,
  use: {
    viewport: { width: 1280, height: 720 },
    baseURL: "http://localhost:5000",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
}

export default config
