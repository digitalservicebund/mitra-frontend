import * as fs from "fs"
import { expect, test } from "@playwright/test"

test.skip(
  ({ browserName }) => browserName === "chromium",
  "Chrome chrashes upon invoking `window.showSaveFilePicker`... => https://github.com/microsoft/playwright/issues/7339"
)

test("Save currently worked on playbook to disk", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/mitra-frontend/playbook/new`)

  page.on("download", (download) => {
    download.createReadStream().then((stream) => {
      const writable = fs.createWriteStream("./test/e2e/saved-playbook.json")
      stream.pipe(writable)
    })
  })

  await Promise.all([
    page.waitForEvent("download"), // expect download to start
    page.click("text=Speichern"),
  ])
  const downloaded = fs.readFileSync("./test/e2e/saved-playbook.json", "utf-8")
  expect(() => JSON.parse(downloaded)).not.toThrow()
  expect(JSON.parse(downloaded)).toMatchObject({
    playbook: { title: "Unbenanntes Playbook" },
  })
})
