import fs from "fs"
import { getDocument, queries } from "@playwright-testing-library/test"
import { expect, test as base } from "@playwright/test"

const { findByLabelText, findByText, findByTitle } = queries

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
        modules: [
          {
            steps: [{ id: rememberedStepId }],
          },
        ],
      },
      createdAt: rememberedCreatedAt,
    } = JSON.parse(contract)

    await context.addInitScript(
      (session) => window.sessionStorage.setItem("session", session),
      `{"cache":[${JSON.stringify(
        rememberedContract
      )},"${rememberedStepId}",{"createdAt":"${rememberedCreatedAt}"}]}`
    )
    await page.goto(
      `${baseURL}/mitra-frontend/contract/3d324eca-06c2-4781-af52-705f49039d0d`
    )
    await use(page)
  },
})

test.describe("Title", async () => {
  test.use({
    contractFile: "./test/e2e/fixtures/contract-untitled.json",
  })

  test("editing default", async ({ page }) => {
    await expect(page.locator("header >> input")).not.toBeVisible()
    await page.click("header h1 >> text='Unbenannter Vertrag'")
    await expect(page.locator("header >> input")).toBeVisible()
    await page.fill("header >> input", "Test Vertrag")
    await page.press("header >> input", "Enter")
    await expect(page.locator("header >> input")).not.toBeVisible()
    await expect(page.locator("header h1 >> text='Test Vertrag'")).toBeVisible()
    await expect(
      page.locator("header nav >> text='Test Vertrag'") // breadcrumb
    ).toBeVisible()
    await expect(
      page.locator("nav:left-of(main) >> text='Test Vertrag'") // sidemenu
    ).toBeVisible()
    await page.click("text='Ändern'")
    await expect(page.locator("header >> input")).toBeVisible()
    await expect(page.locator("header >> input")).toBeFocused()
    await page.dispatchEvent("header >> input", "blur")
    await expect(page.locator("header >> input")).not.toBeVisible()
  })
})

test.describe("Text answer step", async () => {
  test.use({
    contractFile: "./test/e2e/fixtures/contract-text-answer-step.json",
  })

  test("editing unanswered", async ({ page }) => {
    const document = await getDocument(page)
    await findByTitle(document, "Test step").then((input) =>
      input.type("Answer to show up in preview")
    )
    const preview = await page.locator("section:right-of(main)").elementHandle()
    await findByText(preview, "Answer to show up in preview")
  })
})

test.describe("Rich text answer step", async () => {
  test.use({
    contractFile: "./test/e2e/fixtures/contract-rich-text-answer-step.json",
  })

  test("editing unanswered", async ({ page }) => {
    await expect(page.locator("main .ProseMirror")).toBeEditable()
    await page.fill("main .ProseMirror", "Answer to show up in preview")
    const preview = await page.locator("section:right-of(main)").elementHandle()
    await findByText(preview, "Answer to show up in preview")
  })
})

test.describe("Single choice answer step", async () => {
  test.use({
    contractFile: "./test/e2e/fixtures/contract-single-choice-answer-step.json",
  })

  test("editing unanswered", async ({ page }) => {
    const document = await getDocument(page)
    const preview = await page.locator("section:right-of(main)").elementHandle()

    await findByLabelText(document, "Test choice 1A")
    await findByLabelText(document, "Test choice 1B")
    await page.click("text=Test choice 1B")
    // NOTE: tried `findByRole(document, "radio")` at first but didn't work...
    await expect(
      page.locator("li:has(label:text('Test choice 1B')) >> [role=radio]")
    ).toBeChecked()
    await findByText(preview, "Test choice 1B")
    await page.click("text=Weiter")
    await findByTitle(document, "Test step 1B")
    await page.click("text=Weiter")
    await findByTitle(document, "Test step 2")
  })
})

test.describe("Multiple choice answer step", async () => {
  test.use({
    contractFile:
      "./test/e2e/fixtures/contract-multiple-choice-answer-step.json",
  })

  test("editing unanswered", async ({ page }) => {
    const document = await getDocument(page)
    const preview = await page.locator("section:right-of(main)").elementHandle()

    await findByLabelText(document, "Test choice 1A")
    await findByLabelText(document, "Test choice 1B")
    await page.click("text=Test choice 1A")
    await expect(
      page.locator("li:has(label:text('Test choice 1A')) >> [role=checkbox]")
    ).toBeChecked()
    await findByText(preview, "Test choice 1A")
    await page.click("text=Test choice 1B")
    await expect(
      page.locator("li:has(label:text('Test choice 1B')) >> [role=checkbox]")
    ).toBeChecked()
    await findByText(preview, "Test choice 1A, Test choice 1B")
    await page.click("text=Weiter")
    await findByTitle(document, "Test step 1A")
    await page.click("text=Weiter")
    await findByTitle(document, "Test step 1B")
    await page.click("text=Weiter")
    await findByTitle(document, "Test step 2")
  })
})
