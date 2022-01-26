import { getDocument, queries } from "@playwright-testing-library/test"
import { expect, test } from "@playwright/test"

const { findAllByText } = queries

test.describe("Open contract from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/contract/open`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/contract.json"
    )
    await expect(page).toHaveURL(
      /\/contract\/3d324eca-06c2-4781-af52-705f49039d0d$/
    )
    await findAllByText(await getDocument(page), "test contract")
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
      /\/contract\/3d324eca-06c2-4781-af52-705f49039d0d$/
    )
    await findAllByText(await getDocument(page), "test contract")
  })

  test("Navigate to buyer start screen", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/einkauf`)
    await page.click("text=Vertrag weiter bearbeiten")
    await expect(page).toHaveURL(/\/contract\/open/)
    await page.click("text=Startseite")
    await expect(page).toHaveURL(/\/mitra-frontend\/einkauf/)
  })
})
