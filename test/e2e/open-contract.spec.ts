import { test } from "@playwright/test"
import { queries } from "@playwright-testing-library/test"

const { findByText } = queries

test.describe("Open contract from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/open-contract`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/contract.json"
    )
    const main = await page.locator("main").elementHandle()
    await findByText(main, "foo module")
  })

  test("via drag and drop", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/open-contract`)
    await page
      .dragAndDrop("html", ".p-fileupload-content")
      .then(() =>
        page.setInputFiles(
          "input[type=file]",
          "./test/e2e/fixtures/contract.json"
        )
      )
    const main = await page.locator("main").elementHandle()
    await findByText(main, "foo module")
  })
})
