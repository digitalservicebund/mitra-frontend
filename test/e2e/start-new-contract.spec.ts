import { test, expect } from "@playwright/test"

test("Reachable from start page", async ({ page }) => {
  await page.goto("/mitra-frontend/")
  await page.click("text=Neuer EVB-IT Cloud Vertrag")
  await expect(page).toHaveURL(/\/contract$/)
  await expect(
    page.locator("text=Wie wollen Sie den Vertrag benennen?")
  ).toBeVisible()
})
