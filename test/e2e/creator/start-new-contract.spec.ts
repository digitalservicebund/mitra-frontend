import { expect, test } from "@playwright/test"

test("Reachable from creator's start page", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/creator`)
  await page.click("text=Neuer EVB-IT Cloud Vertrag")
  await expect(page).toHaveURL(/\/contract\/[a-z0-9-]+$/)

  await page.goto(`${baseURL}/mitra-frontend/creator`)
  await page.click("text=Vertrag weiter bearbeiten")
  await expect(page).toHaveURL(/.*open-contract/)

  await page.goto(`${baseURL}/mitra-frontend/creator`)
  await page.click("text=Neuer Vertrag aus lokalem Playbook")
  await expect(page).toHaveURL(/.*contract\/open-playbook/)
})
