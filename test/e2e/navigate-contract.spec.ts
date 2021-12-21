import { expect, test } from "@playwright/test"
import { getDocument, queries } from "@playwright-testing-library/test"

async function startEditing({ page, baseURL }) {
  await page.goto(`${baseURL}/mitra-frontend/new-contract`)
  await page.locator("text=Vertrag benennen").waitFor()
  await page.mouse.click(0, 0) // Dismiss dialog..
}

test("List contract modules in navigation", async ({ page, baseURL }) => {
  await startEditing({ page, baseURL })

  await page.click("nav >> text=Module")
  await expect(page.locator("nav >> text=Rubrum")).toBeVisible()
  await expect(
    page.locator("nav >> text=Gegenstand der Leistungen")
  ).toBeVisible()
})

test("Navigate through modules in navigation", async ({ page, baseURL }) => {
  await startEditing({ page, baseURL })

  await page.click("nav >> text=Module")
  await page.click("nav >> text=Gegenstand")

  await expect(page.locator("text=Schritt 2.1")).toBeVisible()
})

test("Navigate through steps of a contract for editing", async ({
  page,
  baseURL,
}) => {
  await startEditing({ page, baseURL })

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
