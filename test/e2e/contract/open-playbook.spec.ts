import fs from "fs"
import { getDocument, queries } from "@playwright-testing-library/test"
import { expect, test } from "@playwright/test"

const { findAllByText } = queries

test.describe("Open playbook from filesystem", async () => {
  test("via file picker", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/contract/open-playbook`)
    await page.setInputFiles(
      "input[type=file]",
      "./test/e2e/fixtures/playbook.json"
    )
    await expect(page).toHaveURL(/\/contract\/[a-z0-9-]+$/)
    await findAllByText(await getDocument(page), "test one module")
  })

  test("via drag and drop", async ({ page, baseURL }) => {
    const playbook = await fs.promises.readFile(
      "./test/e2e/fixtures/playbook.json",
      "utf-8"
    )

    await page.goto(`${baseURL}/mitra-frontend/contract/open-playbook`)
    const dataTransfer = await page.evaluateHandle((playbook) => {
      const data = new DataTransfer()
      const file = new File([`${playbook}`], "playbook.json", {
        type: "application/json",
      })
      data.items.add(file)
      return data
    }, playbook)
    await page.dispatchEvent(".p-fileupload-content", "drop", { dataTransfer })
    await expect(page).toHaveURL(/\/contract\/[a-z0-9-]+$/)
    await findAllByText(await getDocument(page), "Unbenannter Vertrag")
  })

  test("Navigate to buyer start screen", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/mitra-frontend/einkauf`)
    await page.click("text=Neuer Vertrag aus lokalem Playbook")
    await expect(page).toHaveURL(/\/contract\/open-playbook/)
    await page.click("text=Startseite")
    await expect(page).toHaveURL(/\/mitra-frontend\/einkauf/)
  })
})
