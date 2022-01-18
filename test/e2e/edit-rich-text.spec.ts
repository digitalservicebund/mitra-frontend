import fs from "fs"
import { expect, Locator, test as base } from "@playwright/test"

type TestFixtures = {
  contractFile: string
  contract: string
  editor: Locator
}

const contractId = "3d324eca-06c2-4781-af52-705f49039d0d"
const editorSelector = "main .ProseMirror"

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
              name: contractId,
              value: `${contract}`,
            },
          ],
        },
      ],
    })
  },
  page: async ({ page, baseURL }, use) => {
    await page.goto(`${baseURL}/mitra-frontend/contract/${contractId}`)
    const editor = page.locator(editorSelector)
    await editor.fill("formattable")
    await editor.selectText()
    await use(page)
  },
  editor: async ({ page }, use) => {
    const editor = page.locator(editorSelector)
    await use(editor)
  },
})

// NOTE: the following tests weren't possible to do in jest, due to the editory relying
// on functionality impossible to provide in jsdom.
// => https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform
test.describe("Rich text editing", async () => {
  test.use({
    contractFile: "./test/e2e/fixtures/contract-rich-text-answer-step.json",
  })

  test("bold text", async ({ page, editor }) => {
    await page.locator("text=bold").click()
    expect(await editor.innerHTML()).toEqual(
      "<p><strong>formattable</strong></p>"
    )
  })

  test("italic text", async ({ page, editor }) => {
    await page.locator("text=italic").click()
    expect(await editor.innerHTML()).toEqual("<p><em>formattable</em></p>")
  })

  test("underlined text", async ({ page, editor }) => {
    await page.locator("text=underline").click()
    expect(await editor.innerHTML()).toEqual("<p><u>formattable</u></p>")
  })

  test("ordered list", async ({ page, editor }) => {
    await page.locator("text=list").click()
    expect(await editor.innerHTML()).toEqual(
      "<ol><li><p>formattable</p></li></ol>"
    )
  })

  test("table", async ({ page, editor }) => {
    await page.locator("text=insert table").click()
    expect(await (await editor.elementHandle()).$$("table")).toHaveLength(1)
    // Default table inits with 3 rows
    expect(await (await editor.elementHandle()).$$("tr")).toHaveLength(3)
    // Default table inits with 3 columns
    expect(
      await (await editor.elementHandle()).$$("tr:first-child td")
    ).toHaveLength(3)
    await page.locator("text=insert row").click()
    expect(await (await editor.elementHandle()).$$("tr")).toHaveLength(4) // row added
    await page.locator("text=insert colum").click()
    expect(
      await (await editor.elementHandle()).$$("tr:first-child td")
    ).toHaveLength(4) // column added
    await page.locator("text=delete colum").click()
    expect(
      await (await editor.elementHandle()).$$("tr:first-child td")
    ).toHaveLength(3)
    await page.locator("text=delete row").click()
    expect(await (await editor.elementHandle()).$$("tr")).toHaveLength(3)
    await page.locator("text=delete table").click()
    expect(await (await editor.elementHandle()).$$("table")).toHaveLength(0)
  })
})
