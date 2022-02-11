import { createContract } from "../../src/infra/JSONMapper"

describe("JSONMapper", () => {
  it("recreates contracts from DTO along with given metadata", () => {
    const metadata = { createdAt: new Date(), savedAt: new Date() }
    const contract = createContract({
      contract: { id: "xyz", title: "foo", modules: [] },
      ...metadata,
    })
    expect(contract.metadata).toEqual(metadata)
  })
})
