import { createContract, createPlaybook } from "../../src/infra/JSONMapper"

describe("JSONMapper", () => {
  it("recreates contracts from DTO along with given metadata", () => {
    const metadata = { createdAt: new Date(), savedAt: new Date() }
    const contract = createContract({
      contract: { id: "xyz", title: "foo", modules: [] },
      ...metadata,
    })
    expect(contract.metadata).toEqual(metadata)
  })

  it("recreates playbooks from DTO along with given metadata", () => {
    const metadata = { createdAt: new Date(), savedAt: new Date() }
    const playbook = createPlaybook({
      playbook: { id: "xyz", title: "foo", modules: [] },
      ...metadata,
    })
    expect(playbook.metadata).toEqual(metadata)
  })
})
