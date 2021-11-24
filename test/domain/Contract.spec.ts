import Contract from "../../src/domain/Contract"
import Playbook from "../../src/domain/Playbook"

describe("Contract", () => {
  it("should be created from given playbook", () => {
    const playbook: Playbook = {
      modules: [],
    }
    const contract = Contract.fromPlaybook(playbook)
    expect(contract.playbook).toBe(playbook)
  })

  it("should return the modules of playbook", () => {
    const playbook: Playbook = {
      modules: [
        {
          text: "foo",
          steps: [],
        },
      ],
    }
    const contract = Contract.fromPlaybook(playbook)
    expect(contract.getModules).toBe(playbook.modules)
    expect(contract.getModules[0].text).toBe("foo")
  })
})
