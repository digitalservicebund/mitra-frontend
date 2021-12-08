import { test, expect } from "@playwright/test"
import { getDocument, queries } from "@playwright-testing-library/test"

test("Reachable from start page", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/`)
  await page.click("text=Neuer EVB-IT Cloud Vertrag")
  await expect(page).toHaveURL(/\/contract\/cloud-contract$/)
})

test("Start with title input dialog", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/cloud-contract`)
  await expect(
    page.locator("text=Wie wollen Sie den Vertrag benennen?")
  ).toBeVisible()
})

test("Close title input dialog when clicking x", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/cloud-contract`)
  await page.locator("text=Vertrag benennen").waitFor()
  await page.click(".p-dialog-header-close-icon")
  await page.locator("#input-contract-title").waitFor({ state: "detached" })
  await expect(page.locator("text=Vertrag benennen")).toBeHidden()
})

test("Close title input dialog when clicking mask", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/cloud-contract`)
  await page.locator("text=Vertrag benennen").waitFor()
  // Click outside the dialog..
  await page.mouse.click(0, 0)
  await page.locator("#input-contract-title").waitFor({ state: "detached" })
  await expect(page.locator("text=Vertrag benennen")).toBeHidden()
})

test("Save edited title when clicking button", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/cloud-contract`)
  await page.fill("#input-contract-title", "foo")
  await page.click("text=OK")
  await page.locator("#input-contract-title").waitFor({ state: "detached" })
  await expect(page.locator("text=foo")).toBeVisible()
})

test("Save edited title when pressing enter", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/cloud-contract`)
  await page.fill("#input-contract-title", "foo")
  await page.press("#input-contract-title", "Enter")
  await page.locator("#input-contract-title").waitFor({ state: "detached" })
  await expect(page.locator("text=foo")).toBeVisible()
})

test("List contract modules in navigation", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/cloud-contract`)
  await page.locator("text=Vertrag benennen").waitFor()
  await page.mouse.click(0, 0) // Dismiss dialog..

  await page.click("nav >> text=Module")
  await expect(page.locator("nav >> text=Rubrum")).toBeVisible()
  await expect(
    page.locator("nav >> text=Gegenstand der Leistungen")
  ).toBeVisible()
})

test("Navigate through steps of a contract for editing", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/cloud-contract`)
  await page.locator("text=Vertrag benennen").waitFor()
  await page.mouse.click(0, 0) // Dismiss dialog..

  const { findByTitle } = queries
  const document = await getDocument(page)
  await findByTitle(document, "Schritt 1.1").then((input) => input.type("foo"))
  await page.click("text=Weiter")
  await findByTitle(document, "Schritt 1.2").then((input) => input.type("bar"))
  await page.click("text=Zurück")
  await findByTitle(document, "Schritt 1.1")
    .then((input) => input.inputValue())
    .then((value) => expect(value).toBe("foo"))
  await page.click("text=Weiter")
  await findByTitle(document, "Schritt 1.2")
    .then((input) => input.inputValue())
    .then((value) => expect(value).toBe("bar"))
})
