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
          origin: "http://localhost:5000",
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

test.describe("Edit Module", async () => {
  test.use({
    playbookFile: "./test/e2e/fixtures/playbook.json",
  })

  test("editing title", async ({ page }) => {
    await expect(page.locator("header >> input")).not.toBeVisible()
    await page.locator("header h1 >> text='test one module'").click()
    await expect(page.locator("header >> input")).toBeVisible()
    await page.fill("header >> input", "Foo Module")
    await page.press("header >> input", "Enter")
    await expect(page.locator("header >> input")).not.toBeVisible()
    await expect(page.locator("header h1 >> text='Foo Module'")).toBeVisible()
    await expect(
      page.locator("header nav >> text='Foo Module'") // breadcrumb
    ).toBeVisible()
    await expect(
      page.locator("nav:left-of(main) >> text='Foo Module'") // sidemenu
    ).toBeVisible()
    await page.click("text='Ändern'")
    await expect(page.locator("header >> input")).toBeVisible()
    await expect(page.locator("header >> input")).toBeFocused()
    await page.dispatchEvent("header >> input", "blur")
    await expect(page.locator("header >> input")).not.toBeVisible()
  })

  test("navigate to second module", async ({ page }) => {
    await page.locator("nav:left-of(main) >> text='test two module'").click()
    await expect(page).toHaveURL(
      /\/playbook\/[a-z0-9-]+\/module\/0b141639-8718-4ad9-9839-ec89aa8a1ec5\/$/
    )
    await expect(
      page.locator("header h1 >> text='test two module'")
    ).toBeVisible()
  })

  test("delete module", async ({ page }) => {
    await page.locator("text=Modul löschen").click()
    await expect(page).toHaveURL(/\/playbook\/[a-z0-9-]+\/$/)
    await expect(
      page.locator("nav:left-of(main) >> text='test one module'")
    ).not.toBeVisible()
  })

  test("edit step title", async ({ page }) => {
    await page.locator("section:below(header) >> text='bar step'").click()
    await expect(page.locator("section:below(header) >> input")).toBeVisible()
    await page.fill("section:below(header) >> input", "updated step title")
    await page.press("section:below(header) >> input", "Enter")
    await expect(
      page.locator("section:below(header) >> input")
    ).not.toBeVisible()
    await expect(page.locator("text=updated step title")).toBeVisible()
  })

  test("edit step description", async ({ page }) => {
    await page
      .locator(
        "section:below(header) >> :nth-match(:text('Erklärungstext (optional)'), 1)"
      )
      .click()
    await expect(page.locator("section:below(header) >> input")).toBeVisible()
    await page.fill(
      "section:below(header) >> input",
      "updated step description"
    )
    await page.press("section:below(header) >> input", "Enter")
    await expect(
      page.locator("section:below(header) >> input")
    ).not.toBeVisible()
    await expect(page.locator("text=updated step description")).toBeVisible()
  })

  test("clone step", async ({ page }) => {
    await expect(page.locator("text=bar step")).toHaveCount(1)
    await page
      .locator("section:below(header) >> li:has-text('bar step') >> button")
      .click()
    await page.locator("text=Frage duplizieren").click()
    await expect(page.locator("text=bar step")).toHaveCount(2)
  })

  test("delete step", async ({ page }) => {
    await expect(page.locator("text=baz step")).toBeVisible()
    await page
      .locator("section:below(header) >> li:has-text('baz step') >> button")
      .click()
    await page.locator("text=Frage löschen").click()
    await expect(page.locator("text=baz step")).not.toBeVisible()
  })

  test("add step via context menu", async ({ page }) => {
    await expect(page.locator("ol:below(header) >> li")).toHaveCount(2)
    await page
      .locator("section:below(header) >> li:has-text('baz step') >> button")
      .click()
    await page.locator("text=Neue Frage").click()
    await expect(page.locator("ol:below(header) >> li")).toHaveCount(3)
  })
})

test.describe("Edit empty Module", async () => {
  test.use({
    playbookFile: "./test/e2e/fixtures/playbook-empty-module.json",
  })

  test("add question", async ({ page }) => {
    await expect(
      page.locator("text=Für dieses Modul wurden noch keine Fragen erstellt.")
    ).toBeVisible()
    await page.locator("text=Neue Frage").click()
    await expect(
      page.locator("main section >> text='Neue Frage'")
    ).toBeVisible()
    await expect(page.locator("text=Erklärungstext (optional)")).toBeVisible()
  })
})
