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
  storageState: async ({ contract }, use) => {
    await use({
      cookies: [],
      origins: [
        {
          origin: "http://localhost:5000",
          localStorage: [
            {
              name: "3d324eca-06c2-4781-af52-705f49039d0d",
              value: `${contract}`,
            },
          ],
        },
      ],
    })
  },
})

test.describe("Sheet answer step", async () => {
  test.use({
    contractFile: "./test/e2e/fixtures/contract-sheet-answer-step.json",
  })

  test("editing prefilled sheet", async ({ page, baseURL }) => {
    await page.goto(
      `${baseURL}/mitra-frontend/contract/3d324eca-06c2-4781-af52-705f49039d0d`
    )
    const preview = await page.locator("section:right-of(main)").elementHandle()
    await page.locator("main >> text=Foo Cloud").click()
    await page.fill(
      "table:has-text('Lfd Nr') >> input",
      "This field is updated"
    )
    page.keyboard.press("Enter")
    await findByText(preview, "This field is updated")
  })

  test("preview without empty rows", async ({ page, baseURL }) => {
    await page.goto(
      `${baseURL}/mitra-frontend/contract/3d324eca-06c2-4781-af52-705f49039d0d`
    )
    const preview = await page.locator("section:right-of(main)").elementHandle()
    const allRows = await preview.$$("tbody tr")

    expect(allRows).toHaveLength(2)
  })

  test("hiding preview if empty sheet", async ({ page, baseURL }) => {
    await page.goto(
      `${baseURL}/mitra-frontend/contract/3d324eca-06c2-4781-af52-705f49039d0d`
    )

    await page.locator("main >> text=Foo Cloud").click()
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
