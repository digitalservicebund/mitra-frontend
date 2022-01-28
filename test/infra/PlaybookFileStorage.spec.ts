import Playbook from "../../src/domain/Playbook"
import storage from "../../src/infra/PlaybookFileStorage"

describe("PlaybookFileStorage", () => {
  describe("load", () => {
    it("maintains the contract's savedAt metadata", async () => {
      const playbook = new Playbook()
      const lastModified = Date.now()
      const file = new File([JSON.stringify({ playbook })], "playbook.json", {
        lastModified,
      })
      const loaded = await storage.load(file)
      expect(loaded.metadata.savedAt).toEqual(new Date(lastModified))
    })
  })
})
