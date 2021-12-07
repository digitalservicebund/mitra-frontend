import { test, expect } from "@playwright/test"

test("Reachable from start page", async ({ page }) => {
  await page.goto("/mitra-frontend/")
  await page.click("text=Neuer EVB-IT Cloud Vertrag")
  await expect(page).toHaveURL(/\/contract$/)
})

test("Start with title input dialog", async ({ page }) => {
  await page.goto("/mitra-frontend/contract")
  await expect(
    page.locator("text=Wie wollen Sie den Vertrag benennen?")
  ).toBeVisible()
})

test("Close title input dialog on clicking x", async ({ page }) => {
  await page.goto("/mitra-frontend/contract")
  await page.click(".p-dialog-header-close-icon")
  await expect(page.locator("#input-contract-title")).toBeHidden()
  await expect(page.locator("text=Vertrag benennen")).toBeHidden()
})

test("Close title input dialog on clicking mask", async ({ page }) => {
  await page.goto("/mitra-frontend/contract")
  // Click outside the dialog..
  await page.mouse.click(0, 0)
  await expect(page.locator("#input-contract-title")).toBeHidden()
  await expect(page.locator("text=Vertrag benennen")).toBeHidden()
})

test("should save edited title on button click", async ({ page }) => {
  await page.goto("/mitra-frontend/contract")
  await page.fill("#input-contract-title", "foo")
  await page.click("text=OK")
  await expect(page.locator("#input-contract-title")).toBeHidden()
  await expect(page.locator("text=foo")).toBeVisible()
})

test("should save edited title on pressing enter", async ({ page }) => {
  await page.goto("/mitra-frontend/contract")
  await page.fill("#input-contract-title", "foo")
  await page.press("#input-contract-title", "Enter")
  await expect(page.locator("#input-contract-title")).toBeHidden()
  await expect(page.locator("text=foo")).toBeVisible()
})
