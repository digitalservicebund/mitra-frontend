import Playbook from "../../src/domain/Playbook"
import storage from "../../src/infra/PlaybookFileStorage"

describe("PlaybookFileStorage", () => {
  describe("load", () => {
    it("maintains the contract's savedAt metadata", async () => {
      const playbook = new Playbook()
      const lastModified = Date.now()
      const file = new File(
        [
          JSON.stringify({
            playbook,
            createdAt: new Date("2022-01-27T10:04:38.424Z"),
          }),
        ],
        "playbook.json",
        {
          lastModified,
        }
      )
      const loaded = await storage.load(file)
      expect(loaded.metadata.createdAt).toEqual(
        new Date("2022-01-27T10:04:38.424Z")
      )
      expect(loaded.metadata.savedAt).toEqual(new Date(lastModified))
    })
  })
})
