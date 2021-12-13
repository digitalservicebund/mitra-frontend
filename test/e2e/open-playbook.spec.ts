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
    const document = await getDocument(page)
    const { getByText } = queries
    await getByText(document, "foo module")
  })
})
