import { expect, test } from "@playwright/test"

test("Reachable from start page", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/creator`)
  await page.click("text=Neues Playbook erstellen")
  await expect(page).toHaveURL(/\/playbook\/[a-z0-9-]+$/)
})
