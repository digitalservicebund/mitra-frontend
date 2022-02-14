import fs from "fs"
import { expect, test as base } from "@playwright/test"

type TestFixtures = {
  playbookFile: string
  playbook: string
}

const playbookId = "3d324eca-06c2-4781-af52-705f49039d0d"

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
          origin: "http://localhost:4173",
          localStorage: [
            {
              name: playbookId,
              value: `${playbook}`,
            },
          ],
        },
      ],
    })
  },
  page: async ({ baseURL, page }, use) => {
    await page.goto(
      `${baseURL}/mitra-frontend/playbook/${playbookId}/module/0b141639-8718-4ad9-9839-ec89aa8a1ec4`
    )
    await use(page)
  },
})

test.describe("Edit Step", async () => {
  test.use({
    playbookFile: "./test/e2e/fixtures/playbook.json",
  })

  test("editing title", async ({ page }) => {
    await expect(
      page.locator("main >> section >> input[aria-label='Eigenschaft ändern']")
    ).not.toBeVisible()
    await page.click("text='bar step'")
    await expect(
      page.locator("main >> section >> input[aria-label='Eigenschaft ändern']")
    ).toBeVisible()
    await page.fill(
      "main >> section >> input[aria-label='Eigenschaft ändern']",
      "foo step"
    )
    await page.press(
      "main >> section >> input[aria-label='Eigenschaft ändern']",
      "Enter"
    )
    await expect(
      page.locator("main >> section >> input[aria-label='Eigenschaft ändern']")
    ).not.toBeVisible()
    await expect(page.locator("text='foo step'")).toBeVisible()
    await page.reload()
    await expect(page.locator("text='foo step'")).toBeVisible()
  })

  test("edit description step", async ({ page }) => {
    await expect(
      page.locator("main >> section >> input[aria-label='Eigenschaft ändern']")
    ).not.toBeVisible()
    await page.click("main >> section:has-text('bar step') >> details")
    await page.click("text='Erklärungstext (optional)'")
    await expect(
      page.locator("main >> section >> input[aria-label='Eigenschaft ändern']")
    ).toBeVisible()
    await page.fill(
      "main >> section >> input[aria-label='Eigenschaft ändern']",
      "foo description"
    )
    await page.press(
      "main >> section >> input[aria-label='Eigenschaft ändern']",
      "Enter"
    )
    await expect(
      page.locator("main >> section >> input[aria-label='Eigenschaft ändern']")
    ).not.toBeVisible()
    await expect(page.locator("text='foo description'")).toBeVisible()
    await page.reload()
    await page.click("main >> section:has-text('bar step') >> details")
    await expect(page.locator("text='foo description'")).toBeVisible()
  })

  test("edit step type and clone", async ({ page }) => {
    await expect(
      page.locator(":nth-match(:text('kurzer Text'), 1)")
    ).not.toBeVisible()
    await page.click("main >> section li:has-text('bar step') >> details")
    await page.click("text='kurzer Text'")
    await page.click("text='langer Text'")
    await expect(
      page.locator(":nth-match(:text('kurzer Text'), 1)")
    ).not.toBeVisible()
    await expect(
      page.locator("main >> section:has-text('bar step') >> text='langer Text'")
    ).toBeVisible()
    // duplicate
    await page.click(
      "section:below(header) >> li:has-text('bar step') >> button"
    )
    await page.click("text=Frage duplizieren")
    await page.click(
      "main >> section li:has-text('Kopie von bar step') >> details summary"
    )
    await expect(
      page.locator(":nth-match(:text('langer Text'), 2)")
    ).toBeVisible()
  })
})
