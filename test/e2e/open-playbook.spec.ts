import { queries } from "@playwright-testing-library/test"
import { test } from "@playwright/test"

const { findByText } = queries

test.describe("Open playbook from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/open-playbook`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/playbook.json"
    )
    await page.click(".p-dialog-header-close-icon")
    const main = await page.locator("main").elementHandle()
    await findByText(main, "foo module")
  })

  test("via drag and drop", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/open-playbook`)
    await page
      .dragAndDrop("html", ".p-fileupload-content")
      .then(() =>
        page.setInputFiles(
          "input[type=file]",
          "./test/e2e/fixtures/playbook.json"
        )
      )
    await page.click(".p-dialog-header-close-icon")
    const main = await page.locator("main").elementHandle()
    await findByText(main, "foo module")
  })
})
