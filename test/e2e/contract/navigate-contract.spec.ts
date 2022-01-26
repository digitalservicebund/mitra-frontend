import { getDocument, queries } from "@playwright-testing-library/test"
import { expect, test as base } from "@playwright/test"

const test = base.extend({
  page: async ({ baseURL, page }, use) => {
    await page.goto(`${baseURL}/mitra-frontend/contract/new`)
    await use(page)
  },
})

test("List contract modules in navigation", async ({ page }) => {
  await expect(page.locator("nav >> text=Rubrum")).toBeVisible()
  await expect(
    page.locator("nav >> text=Gegenstand der Leistungen")
  ).toBeVisible()
})

test("Navigate through modules in navigation", async ({ page }) => {
  await page.click("nav >> text=Gegenstand")
  await expect(page.locator("text=Schritt 2.1")).toBeVisible()
})

test("Navigate through steps of a contract for editing", async ({ page }) => {
  const { findByTitle } = queries
  const document = await getDocument(page)
  await findByTitle(document, "Schritt 1.1").then((input) => input.type("foo"))
  await page.click("text=Weiter")
  await findByTitle(document, "Schritt 1.2").then((input) => input.type("bar"))
  await page.click("text=Zurück")
  await findByTitle(document, "Schritt 1.1")
    .then((input) => input.inputValue())
    .then((value) => expect(value).toBe("foo"))
  await page.click("text=Weiter")
  await findByTitle(document, "Schritt 1.2")
    .then((input) => input.inputValue())
    .then((value) => expect(value).toBe("bar"))
})
