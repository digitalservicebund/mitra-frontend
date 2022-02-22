import { test } from "@playwright/test"
import { injectAxe, checkA11y } from "axe-playwright"

test("Buyer start screen", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/open-playbook`)
  await injectAxe(page)
  await checkA11y(page, undefined, {
    includedImpacts: ["critical"],
    axeOptions: {},
  })
})
