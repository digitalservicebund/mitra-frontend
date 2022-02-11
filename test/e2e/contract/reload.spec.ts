import { expect, test } from "@playwright/test"

test("Recreate state after reload", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/new`)
  await page.waitForURL(/\/contract\/[a-z0-9-]+$/)
  await page.click("header h1 >> text='Unbenannter Vertrag'")
  await page.fill("header >> input", "Test Vertrag")
  await page.press("header >> input", "Enter")
  await expect(page.locator("header h1 >> text='Test Vertrag'")).toBeVisible()
  await page.reload()
  await expect(page.locator("header h1 >> text='Test Vertrag'")).toBeVisible()
})
