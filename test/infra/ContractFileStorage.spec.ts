import Contract from "../../src/domain/Contract"
import storage from "../../src/infra/ContractFileStorage"

describe("ContractFileStorage", () => {
  describe("load", () => {
    it("maintains the contract's savedAt metadata", async () => {
      const contract = new Contract("foo", [])
      const lastModified = Date.now()
      const file = new File([JSON.stringify({ contract })], "contract.json", {
        lastModified,
      })
      const loaded = await storage.load(file)
      expect(loaded.metadata.savedAt).toEqual(new Date(lastModified))
    })
  })

  describe("save", () => {
    // NOTE: With jsdom, which jest is using as test environment
    // we need to mock some of the file handling related objects!
    const fileHandle = {} as FileSystemFileHandle
    const fileStream = {} as FileSystemWritableFileStream

    beforeEach(() => {
      // The jsdom env doesn't have `window.showSaveFilePicker`, otherwise this would be:
      // jest.spyOn(window, "showSaveFilePicker").mockResolvedValue(fileHandle)
      window.showSaveFilePicker = jest.fn(() => Promise.resolve(fileHandle))
      // Same here...
      // jest.spyOn(fileHandle, "createWritable")
      fileHandle.createWritable = jest.fn(() => Promise.resolve(fileStream))
      fileStream.write = jest.fn(() => Promise.resolve())
      fileStream.close = jest.fn(() => Promise.resolve())
    })

    it("should save a given contract to a file", async () => {
      const contract: Contract = new Contract("foo", [])
      await storage.save(contract)
      expect(window.showSaveFilePicker).toBeCalledTimes(1)
      expect(fileStream.write).toBeCalledTimes(1)
      expect(fileStream.close).toBeCalledTimes(1)
    })
  })
})
