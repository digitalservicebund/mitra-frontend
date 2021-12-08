import * as fs from "fs"
import { expect, test } from "@playwright/test"

test.skip(
  ({ browserName }) => browserName === "chromium",
  "Chrome chrashes upon invoking `window.showSaveFilePicker`... => https://github.com/microsoft/playwright/issues/7339"
)

test("Save currently worked on contract to disk", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/contract/cloud-contract`)
  await page.locator("text=Vertrag benennen").waitFor()
  await page.fill("#input-contract-title", "TEST")
  await page.click("text=OK")

  page.on("download", (download) => {
    download.createReadStream().then((stream) => {
      const writable = fs.createWriteStream("./test/e2e/saved-contract.json")
      stream.pipe(writable)

      const downloaded = fs.readFileSync(
        "./test/e2e/saved-contract.json",
        "utf-8"
      )

      expect(() => JSON.parse(downloaded)).not.toThrow()
      expect(JSON.parse(downloaded)).toMatchObject({ title: "TEST" })
    })
  })
  await page.click("text=Speichern")
})
