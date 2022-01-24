import fs from "fs"
import { expect, test as base } from "@playwright/test"

type TestFixtures = {
  playbookFile: string
  playbook: string
}

const test = base.extend<TestFixtures>({
  playbookFile: "", // needs to be filled in per test.use(...) atm, see below
  playbook: async ({ playbookFile }, use) => {
    const playbook = await fs.promises.readFile(playbookFile, "utf-8")
    await use(playbook)
  },
  storageState: async ({ playbook }, use) => {
    await use({
      cookies: [],
      origins: [
        {
          origin: "http://localhost:5000",
          localStorage: [
            {
              name: "3d324eca-06c2-4781-af52-705f49039d0d",
              value: `${playbook}`,
            },
          ],
        },
      ],
    })
  },
})

test.describe("Module overview", async () => {
  test.use({
    playbookFile: "./test/e2e/fixtures/playbook.json",
  })

  test("showing header with title", async ({ page, baseURL }) => {
    await page.goto(
      `${baseURL}/mitra-frontend/playbook/3d324eca-06c2-4781-af52-705f49039d0d`
    )

    // NOTE: the testing library's findByText didn't work with <header> in webkit..
    await expect(page.locator("header")).toHaveText("test playbook")
  })
})
