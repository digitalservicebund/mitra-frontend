import fs from "fs"
import { expect, Page, test as base } from "@playwright/test"

type TestFixtures = {
  playbookFile: string
  playbook: string
  page: Page
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
  page: async ({ baseURL, page }, use) => {
    await page.goto(
      `${baseURL}/mitra-frontend/playbook/3d324eca-06c2-4781-af52-705f49039d0d`
    )
    await use(page)
  },
})

test.describe("Playbook modules overview", async () => {
  test.use({
    playbookFile: "./test/e2e/fixtures/playbook.json",
  })

  test("showing header with title", async ({ page }) => {
    // NOTE: the testing library's findByText didn't work with <header> in webkit..
    await expect(page.locator("header >> text='test playbook'")).toBeVisible()
  })

  test("showing modules", async ({ page }) => {
    await expect(page.locator("main >> text='Module'")).toBeVisible()
    await expect(page.locator("main >> text='foo module'")).toBeVisible()
    await expect(page.locator("main >> text='2 Fragen'")).toBeVisible()
  })
})

test.describe("Playbook metadata", async () => {
  test.use({
    playbookFile: "./test/e2e/fixtures/empty-playbook.json",
  })

  test("editing title", async ({ page }) => {
    await page.locator("header >> text='Unbenanntes Playbook'").click()
    await page.fill("header >> input", "Test Playbook")
    await page.press("header >> input", "Enter")
    await expect(page.locator("header >> input")).not.toBeVisible()
    await expect(page.locator("header >> text='Test Playbook'")).toBeVisible()
  })
})
