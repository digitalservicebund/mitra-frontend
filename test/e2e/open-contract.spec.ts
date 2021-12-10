import { expect, test } from "@playwright/test"
import { getDocument, queries } from "@playwright-testing-library/test"

test.describe("Open contract from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/open-contract`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/contract.json"
    )
    const document = await getDocument(page)
    const { findByTitle } = queries
    await findByTitle(document, "bar")
      .then((input) => input.inputValue())
      .then((value) => expect(value).toBe("hello world"))
  })
})

test("Reload cloud contract after having opened saved contract", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}/mitra-frontend/open-contract`)
  await page.setInputFiles(
    "input[type=file]",
    "./test/e2e/fixtures/contract.json"
  )
  await page.click("text=Startseite")
  await page.click("text=Neuer EVB-IT Cloud Vertrag")
  const document = await getDocument(page)
  const { getByText } = queries
  await getByText(document, "Rubrum")
})
