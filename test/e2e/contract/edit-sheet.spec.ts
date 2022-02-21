import fs from "fs"
import { queries } from "@playwright-testing-library/test"
import { expect, test as base } from "@playwright/test"

const { findByText } = queries

type TestFixtures = {
  contractFile: string
  contract: string
}

const test = base.extend<TestFixtures>({
  contractFile: "", // needs to be filled in per test.use(...) atm, see below
  contract: async ({ contractFile }, use) => {
    const contract = await fs.promises.readFile(contractFile, "utf-8")
    await use(contract)
  },
  page: async ({ baseURL, context, contract, page }, use) => {
    const {
      contract: rememberedContract,
      contract: {
        id: rememberedContractId,
        modules: [
          {
            steps: [{ id: rememberedStepId }],
          },
        ],
      },
    } = JSON.parse(contract)

    await context.addInitScript(
      (session) => window.sessionStorage.setItem("session", session),
      `{"contracts":{"${rememberedContractId}":[${JSON.stringify(
        rememberedContract
      )},"${rememberedStepId}"]}}`
    )
    await page.goto(
      `${baseURL}/mitra-frontend/contract/${rememberedContractId}`
    )
    await use(page)
  },
})

test.describe("Sheet answer step", async () => {
  test.use({
    contractFile: "./test/e2e/fixtures/contract-sheet-answer-step.json",
  })

  test("editing prefilled sheet", async ({ page }) => {
    const preview = await page.locator("section:right-of(main)").elementHandle()
    await page.click("main >> text=Foo Cloud")
    await page.fill(
      "table:has-text('Lfd Nr') >> input",
      "This field is updated"
    )
    page.keyboard.press("Enter")
    await findByText(preview, "This field is updated")
  })

  test("preview without empty rows", async ({ page }) => {
    const preview = await page.locator("section:right-of(main)").elementHandle()
    const allRows = await preview.$$("tbody tr")
    expect(allRows).toHaveLength(2)
  })

  test("hiding preview if empty sheet", async ({ page }) => {
    await page.click("main >> text=Foo Cloud")
    await page.fill("table:has-text('Lfd Nr') >> input", "")
    for (let i = 18; i > 0; i--) {
      await page.keyboard.press("Tab")
      await page.keyboard.press("Delete")
    }
    await expect(
      page.locator("section:right-of(main) >> table.p-datatable-table")
    ).toHaveCount(0)
  })
})
