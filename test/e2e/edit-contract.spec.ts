import { expect, test } from "@playwright/test"
import { getDocument, queries } from "@playwright-testing-library/test"

const { findByTitle, findByText } = queries

async function startEditing({ page, baseURL }) {
  await page.goto(`${baseURL}/mitra-frontend/contract/cloud-contract`)
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

test("Navigate through steps of a contract for editing", async ({
  page,
  baseURL,
}) => {
  await startEditing({ page, baseURL })

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

test("Preview edits", async ({ page, baseURL }) => {
  await startEditing({ page, baseURL })

  const document = await getDocument(page)
  await findByTitle(document, "Schritt 1.1").then((input) =>
    input.type("Answer to show up in preview")
  )
  const preview = await page.locator("section:right-of(main)").elementHandle()
  await findByText(preview, "Vorschau Vertragstext")
  await findByText(preview, "Rubrum")
  await findByText(preview, "Answer to show up in preview")
})
