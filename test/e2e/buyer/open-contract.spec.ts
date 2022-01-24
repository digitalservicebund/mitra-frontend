import { queries } from "@playwright-testing-library/test"
import { expect, test } from "@playwright/test"

const { findByText } = queries

test.describe("Open contract from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/contract/open`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/contract.json"
    )
    await expect(page).toHaveURL(
      /contract\/3d324eca-06c2-4781-af52-705f49039d0d/
    )
    const main = await page.locator("main").elementHandle()
    await findByText(main, "foo module")
  })

  test("via drag and drop", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/contract/open`)
    const dataTransfer = await page.evaluateHandle(() => {
      const data = new DataTransfer()
      const file = new File(
        [
          '{"contract":{"id":"3d324eca-06c2-4781-af52-705f49039d0d","title":"test contract","modules":[]}}',
        ],
        "contract.json",
        {
          type: "application/json",
        }
      )
      data.items.add(file)
      return data
    })
    await page.dispatchEvent(".p-fileupload-content", "drop", { dataTransfer })
    await expect(page).toHaveURL(
      /contract\/3d324eca-06c2-4781-af52-705f49039d0d/
    )
    const main = await page.locator("main").elementHandle()
    await findByText(main, "test contract")
  })
})
