import { getDocument, queries } from "@playwright-testing-library/test"
import { test } from "@playwright/test"

const { findByText } = queries

test.describe("Open playbook from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/playbook/open-playbook`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/playbook.json"
    )
    const main = await page.locator("main#playbook-screen").elementHandle()
    await findByText(main, "foo module")
  })

  test("via drag and drop", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/playbook/open-playbook`)
    const dataTransfer = await page.evaluateHandle(() => {
      const data = new DataTransfer()
      const file = new File(
        [
          '{"playbook":{"id":"3d324eca-06c2-4781-af52-705f49039d0d","modules":[{"id": "0b141639-8718-4ad9-9839-ec89aa8a1ec4","text": "foo module","steps": []}]}}',
        ],
        "playbook.json",
        {
          type: "application/json",
        }
      )
      data.items.add(file)
      return data
    })
    await page.dispatchEvent(".p-fileupload-content", "drop", { dataTransfer })
    const main = await page.locator("main#playbook-screen").elementHandle()
    await findByText(main, "foo module")
  })
})
