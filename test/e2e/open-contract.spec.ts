import { expect, test } from "@playwright/test"
import { getDocument, queries } from "@playwright-testing-library/test"

const { getByText, findByTitle } = queries

test.describe("Open contract from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/open-contract`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/contract.json"
    )
    const document = await getDocument(page)
    await findByTitle(document, "bar")
      .then((input) => input.inputValue())
      .then((value) => expect(value).toBe("hello world"))
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
    await getByText(main, "foo module")
  })
})
