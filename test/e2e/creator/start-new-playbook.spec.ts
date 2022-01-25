import { expect, test } from "@playwright/test"

test("Reachable from start page", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/creator`)
  await page.click("text=Neues Playbook erstellen")
  await expect(page).toHaveURL(/\/playbook\/[a-z0-9-]+$/)
})

test("Navigate to creator start screen", async ({ page, baseURL }) => {
  // breadcrumb
  await page.goto(`${baseURL}/mitra-frontend/creator`)
  await page.click("text=Neues Playbook erstellen")
  await expect(page).toHaveURL(/\/playbook\/[a-z0-9-]+$/)
  await page.click("header >> text=Startseite")
  await expect(page).toHaveURL(/\/mitra-frontend\/creator/)

  // SideNavigation
  await page.click("text=Neues Playbook erstellen")
  await expect(page).toHaveURL(/\/playbook\/[a-z0-9-]+$/)
  await page.click("nav:has-text('Speichern') >> text=Startseite")
  await expect(page).toHaveURL(/\/mitra-frontend\/creator/)
})
