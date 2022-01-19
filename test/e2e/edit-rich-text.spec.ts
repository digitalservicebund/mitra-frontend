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
    await editor.selectText()
    await page.locator("button[title=Fett]").click()
    expect(await editor.innerHTML()).toEqual(
      "<p><strong>formattable</strong></p>"
    )
  })

  test("italic text", async ({ page, editor }) => {
    await editor.selectText()
    await page.locator("button[title=Kursiv]").click()
    expect(await editor.innerHTML()).toEqual("<p><em>formattable</em></p>")
  })

  test("underlined text", async ({ page, editor }) => {
    await editor.selectText()
    await page.locator("button[title=Unterstrichen]").click()
    expect(await editor.innerHTML()).toEqual("<p><u>formattable</u></p>")
  })

  test("ordered list", async ({ page, editor }) => {
    await editor.selectText()
    await page.locator("button[title=Liste]").click()
    expect(await editor.innerHTML()).toEqual(
      "<ol><li><p>formattable</p></li></ol>"
    )
  })

  test("table", async ({ page, editor }) => {
    await page.locator("button[title=Tabelle]").click()
    await expect(page.locator("text=Tabelle einfügen")).toBeVisible()
    await page.locator("text=Tabelle einfügen").click()
    expect(await (await editor.elementHandle()).$$("table")).toHaveLength(1)
    // Default table inits with 3 rows
    expect(await (await editor.elementHandle()).$$("tr")).toHaveLength(3)
    // Default table inits with 3 columns
    expect(
      await (await editor.elementHandle()).$$("tr:first-child td")
    ).toHaveLength(3)

    await page.locator("button[title=Tabelle]").click()
    await expect(page.locator("text=Zeile einfügen")).toBeVisible()
    await page.locator("text=Zeile einfügen").click()
    expect(await (await editor.elementHandle()).$$("tr")).toHaveLength(4) // row added

    await page.locator("button[title=Tabelle]").click()
    await expect(page.locator("text=Zeile löschen")).toBeVisible()
    await page.locator("text=Zeile löschen").click()
    expect(await (await editor.elementHandle()).$$("tr")).toHaveLength(3)

    await page.locator("button[title=Tabelle]").click()
    await expect(page.locator("text=Spalte einfügen")).toBeVisible()
    await page.locator("text=Spalte einfügen").click()
    expect(
      await (await editor.elementHandle()).$$("tr:first-child td")
    ).toHaveLength(4) // column added

    await page.locator("button[title=Tabelle]").click()
    await expect(page.locator("text=Spalte löschen")).toBeVisible()
    await page.locator("text=Spalte löschen").click()
    expect(
      await (await editor.elementHandle()).$$("tr:first-child td")
    ).toHaveLength(3)

    await page.locator("button[title=Tabelle]").click()
    await expect(page.locator("text=Tabelle löschen")).toBeVisible()
    await page.locator("text=Tabelle löschen").click()
    expect(await (await editor.elementHandle()).$$("table")).toHaveLength(0)
  })

  test("set focus when clicked outside of editable content", async ({
    editor,
  }) => {
    await editor.click({ position: { x: 10, y: 100 } })
    expect(editor).toBeFocused()
  })
})
