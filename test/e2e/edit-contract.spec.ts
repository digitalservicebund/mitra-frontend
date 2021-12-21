import { test } from "@playwright/test"
import { getDocument, queries } from "@playwright-testing-library/test"

const { findByTitle, findByText } = queries

async function startEditing({ page, baseURL }) {
  await page.goto(`${baseURL}/mitra-frontend/new-contract`)
  await page.locator("text=Vertrag benennen").waitFor()
  await page.mouse.click(0, 0) // Dismiss dialog..
}

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
