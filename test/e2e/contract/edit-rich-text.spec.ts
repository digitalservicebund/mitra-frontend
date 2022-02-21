import fs from "fs"
import { expect, Locator, test as base } from "@playwright/test"

type TestFixtures = {
  contractFile: string
  contract: string
  editor: Locator
}

const test = base.extend<TestFixtures>({
  contractFile: "", // needs to be filled in per test.use(...) atm, see below
  contract: async ({ contractFile }, use) => {
    const contract = await fs.promises.readFile(contractFile, "utf-8")
    await use(contract)
  },
  editor: async ({ page }, use) => {
    const editor = page.locator("main .ProseMirror")
    await use(editor)
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

// NOTE: the following tests weren't possible to do in jest, due to the editory relying
// on functionality impossible to provide in jsdom.
// => https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform
test.describe("Rich text editing", async () => {
  test.use({
    contractFile: "./test/e2e/fixtures/contract-edit-rich-text.json",
  })

  test("bold text", async ({ page, editor }) => {
    await editor.fill("formattable")
    await editor.selectText()
    await page.click("button[title=Fett]")
    expect(await editor.innerHTML()).toEqual(
      "<p><strong>formattable</strong></p>"
    )
  })

  test("italic text", async ({ page, editor }) => {
    await editor.fill("formattable")
    await editor.selectText()
    await page.click("button[title=Kursiv]")
    expect(await editor.innerHTML()).toEqual("<p><em>formattable</em></p>")
  })

  test("underlined text", async ({ page, editor }) => {
    await editor.fill("formattable")
    await editor.selectText()
    await page.click("button[title=Unterstrichen]")
    expect(await editor.innerHTML()).toEqual("<p><u>formattable</u></p>")
  })

  test("ordered list", async ({ page, editor }) => {
    await editor.fill("formattable")
    await editor.selectText()
    await page.click("button[title=Liste]")
    expect(await editor.innerHTML()).toEqual(
      "<ol><li><p>formattable</p></li></ol>"
    )
  })

  test("table", async ({ page, editor }) => {
    await page.click("button[title=Tabelle]")
    await expect(page.locator("text=Tabelle einfügen")).toBeVisible()
    await page.click("text=Tabelle einfügen")
    expect(await (await editor.elementHandle()).$$("table")).toHaveLength(1)
    // Default table inits with 3 rows
    expect(await (await editor.elementHandle()).$$("tr")).toHaveLength(3)
    // Default table inits with 3 columns
    expect(
      await (await editor.elementHandle()).$$("tr:first-child td")
    ).toHaveLength(3)

    await page.click("button[title=Tabelle]")
    await expect(page.locator("text=Zeile einfügen")).toBeVisible()
    await page.click("text=Zeile einfügen")
    expect(await (await editor.elementHandle()).$$("tr")).toHaveLength(4) // row added

    await page.click("button[title=Tabelle]")
    await expect(page.locator("text=Zeile löschen")).toBeVisible()
    await page.click("text=Zeile löschen")
    expect(await (await editor.elementHandle()).$$("tr")).toHaveLength(3)

    await page.click("button[title=Tabelle]")
    await expect(page.locator("text=Spalte einfügen")).toBeVisible()
    await page.click("text=Spalte einfügen")
    expect(
      await (await editor.elementHandle()).$$("tr:first-child td")
    ).toHaveLength(4) // column added

    await page.click("button[title=Tabelle]")
    await expect(page.locator("text=Spalte löschen")).toBeVisible()
    await page.click("text=Spalte löschen")
    expect(
      await (await editor.elementHandle()).$$("tr:first-child td")
    ).toHaveLength(3)

    await page.click("button[title=Tabelle]")
    await expect(page.locator("text=Tabelle löschen")).toBeVisible()
    await page.click("text=Tabelle löschen")
    expect(await (await editor.elementHandle()).$$("table")).toHaveLength(0)
  })

  test("set focus when clicked outside of editable content", async ({
    editor,
  }) => {
    await editor.click({ position: { x: 10, y: 100 } })
    expect(editor).toBeFocused()
  })

  test("former answer prefill", async ({ editor }) => {
    expect(await editor.innerHTML()).toEqual("<p>Earlier answer</p>")
  })
})
