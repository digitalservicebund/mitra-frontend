import { test } from "@playwright/test"
import { injectAxe, checkA11y } from "axe-playwright"

test("New contract", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/new`)
  await injectAxe(page)
  await checkA11y(page, undefined, {
    includedImpacts: ["critical"],
    axeOptions: {},
  })
})
