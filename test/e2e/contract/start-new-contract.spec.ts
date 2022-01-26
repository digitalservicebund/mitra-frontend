import { expect, test } from "@playwright/test"

test("Reachable from start page", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/einkauf`)
  await page.click("text=Neuer EVB-IT Cloud Vertrag")
  await expect(page).toHaveURL(/\/contract\/[a-z0-9-]+$/)
})

test("Reset formerly entered values", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/new`)
  await page.waitForURL(/\/contract\/[a-z0-9-]+$/)
  await page.fill("main input", "foo")
  await page.click("text=Startseite")
  await page.click("text=Neuer EVB-IT Cloud Vertrag")
  expect(page.locator("main input")).toHaveValue("")
})

test("Navigate back to buyers start screen", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/einkauf`)
  await page.click("text=Neuer EVB-IT Cloud Vertrag")
  await expect(page).toHaveURL(/\/contract\/[a-z0-9-]+$/)
  await page.click("nav >> text=Startseite")
  await expect(page).toHaveURL(/\/mitra-frontend\/einkauf/)
})
