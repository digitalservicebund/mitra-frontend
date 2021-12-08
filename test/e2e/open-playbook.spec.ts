import { test } from "@playwright/test"
import { getDocument, queries } from "@playwright-testing-library/test"

test.describe("Open playbook from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/open-playbook`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/playbook.json"
    )
    await page.click(".p-dialog-header-close-icon")
    const document = await getDocument(page)
    const { getByText } = queries
    await getByText(document, "foo module")
  })
})

test("Reload cloud contract after having created contract from loaded playbook", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}/mitra-frontend/open-playbook`)
  await page.setInputFiles(
    "input[type=file]",
    "./test/e2e/fixtures/playbook.json"
  )
  await page.click(".p-dialog-header-close-icon")
  await page.click("text=Startseite")
  await page.click("text=Neuer EVB-IT Cloud Vertrag")
  const document = await getDocument(page)
  const { getByText } = queries
  await getByText(document, "Rubrum")
})
