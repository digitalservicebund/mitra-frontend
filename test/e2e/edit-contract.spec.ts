import { expect, Page, test as base } from "@playwright/test"
import { getDocument, queries } from "@playwright-testing-library/test"

const { findByLabelText, findByText, findByTitle } = queries

// Set up fixture..
const test = base.extend<{ page: Page }>({
  page: async ({ page, baseURL }, use) => {
    await page.goto(`${baseURL}/mitra-frontend/new-contract`)
    await page.locator("text=Vertrag benennen").waitFor()
    await page.mouse.click(0, 0) // Dismiss dialog..
    await use(page)
  },
})

test("Edit text answer", async ({ page }) => {
  const document = await getDocument(page)
  await findByTitle(document, "Schritt 1.1").then((input) =>
    input.type("Answer to show up in preview")
  )
  const preview = await page.locator("section:right-of(main)").elementHandle()
  await findByText(preview, "Vorschau Vertragstext")
  await findByText(preview, "Rubrum")
  await findByText(preview, "Textbaustein: Answer to show up in preview")
})

test("Edit single choice answer", async ({ page }) => {
  const document = await getDocument(page)
  await page.locator("text=Schritt 1.1").waitFor()
  await page.click("text=Weiter")
  await page.locator("text=Schritt 1.2").waitFor()
  await page.click("text=Weiter")
  await findByLabelText(document, "Auswahl B")
  await page.click("text=Auswahl B")
  // NOTE: tried `findByRole(document, "radio")` at first but didn't work...
  await expect(
    page.locator("li:has(label:text('Auswahl B')) >> [role=radio]")
  ).toBeChecked()
  const preview = await page.locator("section:right-of(main)").elementHandle()
  await findByText(preview, "Vorschau Vertragstext")
  await findByText(preview, "Auswahl B")
  await page.click("text=Weiter")
  await findByTitle(document, "Schritt 1.3 B").then((input) =>
    input.type("Answer to show up in preview")
  )
  await findByText(preview, "Answer to show up in preview")
  await page.click("text=Weiter")
  await findByTitle(document, "Schritt 2.1")
})
