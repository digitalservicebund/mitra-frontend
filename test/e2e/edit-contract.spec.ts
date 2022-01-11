import { getDocument, queries } from "@playwright-testing-library/test"
import { expect, test } from "@playwright/test"

const { findByLabelText, findByText, findByTitle } = queries

test.describe("Text answer step", async () => {
  test.use({
    storageState: "./test/e2e/fixtures/contract-text-answer-step-state.json",
  })
  test("editing unanswered", async ({ page, baseURL }) => {
    await page.goto(
      `${baseURL}/mitra-frontend/contract/3d324eca-06c2-4781-af52-705f49039d0d`
    )
    const document = await getDocument(page)
    await findByTitle(document, "Test step").then((input) =>
      input.type("Answer to show up in preview")
    )
    const preview = await page.locator("section:right-of(main)").elementHandle()
    await findByText(preview, "Answer to show up in preview")
  })
})

test.describe("Single choice answer step", async () => {
  test.use({
    storageState: "./test/e2e/fixtures/contract-single-choice-step-state.json",
  })
  test("editing unanswered", async ({ page, baseURL }) => {
    await page.goto(
      `${baseURL}/mitra-frontend/contract/3d324eca-06c2-4781-af52-705f49039d0d`
    )
    const document = await getDocument(page)
    await findByLabelText(document, "Test choice 1A")
    await findByLabelText(document, "Test choice 1B")
    await page.click("text=Test choice 1B")
    // NOTE: tried `findByRole(document, "radio")` at first but didn't work...
    await expect(
      page.locator("li:has(label:text('Test choice 1B')) >> [role=radio]")
    ).toBeChecked()
    const preview = await page.locator("section:right-of(main)").elementHandle()
    await findByText(preview, "Test choice 1B")
    await page.click("text=Weiter")
    await findByTitle(document, "Test step 1B").then((input) =>
      input.type("Answer to show up in preview")
    )
    await findByText(preview, "Answer to show up in preview")
    await page.click("text=Weiter")
    await findByTitle(document, "Test step 2")
  })
})
