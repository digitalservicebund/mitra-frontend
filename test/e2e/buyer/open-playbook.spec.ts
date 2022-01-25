import { getDocument, queries } from "@playwright-testing-library/test"
import { expect, test } from "@playwright/test"

const { findByText } = queries

test.describe("Open playbook from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/contract/open-playbook`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/playbook.json"
    )
    await page.click(".p-dialog-header-close-icon")
    await expect(page).toHaveURL(/contract\/[a-z0-9-]/)
    const main = await page.locator("main").elementHandle()
    await findByText(main, "foo module")
  })

  test("via drag and drop", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/contract/open-playbook`)
    const dataTransfer = await page.evaluateHandle(() => {
      const data = new DataTransfer()
      const file = new File(
        [
          '{"playbook":{"id":"3d324eca-06c2-4781-af52-705f49039d0d","title":"","modules":[]}}',
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
    await expect(page).toHaveURL(/contract\/[a-z0-9-]/)
    const document = await getDocument(page)
    await findByText(document, "Wie wollen Sie den Vertrag benennen?")
  })

  test("Navigate to buyer start screen", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/einkauf`)
    await page.click("text=Neuer Vertrag aus lokalem Playbook")
    await expect(page).toHaveURL(/\/contract\/open-playbook/)
    await page.click("text=Startseite")
    await expect(page).toHaveURL(/\/mitra-frontend\/einkauf/)
  })
})
