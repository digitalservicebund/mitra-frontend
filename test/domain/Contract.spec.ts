import Contract from "../../src/domain/Contract"
import Playbook from "../../src/domain/Playbook"

describe("Contract", () => {
  it("should be created from given playbook", () => {
    const playbook: Playbook = {
      id: "1",
      modules: [],
    }
    const contract = Contract.fromPlaybook(playbook)
    expect(contract.playbook).toBe(playbook)
  })
})
