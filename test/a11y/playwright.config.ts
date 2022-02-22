import { devices, PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testDir: ".",
  timeout: 10000,
  use: {
    viewport: { width: 1280, height: 720 },
    acceptDownloads: true,
    baseURL: "http://localhost:5000",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
  webServer: {
    command: "npm run serve",
    port: 5000,
    timeout: parseInt(process.env.WAIT_ON_TIMEOUT) || 20 * 1000,
  },
}

export default config
