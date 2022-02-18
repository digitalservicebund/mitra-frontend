import fs from "fs"
import { expect, test as base } from "@playwright/test"

type TestFixtures = {
  playbookFile: string
  playbook: string
}

const playbookId = "3d324eca-06c2-4781-af52-705f49039d0d"

const test = base.extend<TestFixtures>({
  playbookFile: "", // needs to be filled in per test.use(...) atm, see below
  playbook: async ({ playbookFile }, use) => {
    const playbook = await fs.promises.readFile(playbookFile, "utf-8")
    await use(playbook)
  },
  page: async ({ baseURL, context, page, playbook }, use) => {
    const { playbook: rememberedPlaybook } = JSON.parse(playbook)

    await context.addInitScript(
      (session) => window.sessionStorage.setItem("session", session),
      `{"workspace":{"playbook":[${JSON.stringify(rememberedPlaybook)}]}}`
    )

    await page.goto(`${baseURL}/mitra-frontend/playbook/${playbookId}`)
    await use(page)
  },
})

test.describe("Edit Playbook", async () => {
  test.use({
    playbookFile: "./test/e2e/fixtures/playbook.json",
  })

  test("Change title", async ({ page }) => {
    await expect(page.locator("header >> input")).not.toBeVisible()
    await page.click("header h1 >> text='test playbook'")
    await expect(page.locator("header >> input")).toBeVisible()
    await page.fill("header >> input", "Foo Playbook")
    await page.press("header >> input", "Enter")
    await expect(page.locator("header >> input")).not.toBeVisible()
    await expect(page.locator("header h1 >> text='Foo Playbook'")).toBeVisible()
    await expect(
      page.locator("header nav >> text='Foo Playbook'") // breadcrumb
    ).toBeVisible()
    await expect(
      page.locator("nav:left-of(main) >> text='Foo Playbook'") // sidemenu
    ).toBeVisible()
    await page.click("text='Ändern'")
    await expect(page.locator("header >> input")).toBeVisible()
    await expect(page.locator("header >> input")).toBeFocused()
    await page.dispatchEvent("header >> input", "blur")
    await expect(page.locator("header >> input")).not.toBeVisible()
  })

  test("Add module", async ({ page }) => {
    await page.click("text=Neues Modul")
    await expect(page).toHaveURL(/\/playbook\/[a-z0-9-]+\/module\/[a-z0-9-]+$/)
    await expect(
      page.locator("main h1 >> text='Unbenanntes Modul'")
    ).toBeVisible()
    await page.goBack()
    await expect(
      page.locator("main section:below(header) >> text='Unbenanntes Modul'")
    ).toBeVisible()
  })

  test("Navigate to modules via side nav", async ({ page }) => {
    await page.click("nav:left-of(main) >> text='test one module'")
    await expect(page).toHaveURL(/\/playbook\/[a-z0-9-]+\/module\/[a-z0-9-]+$/)
  })
})
