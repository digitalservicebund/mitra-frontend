import Contract from "../../src/domain/Contract"
import Playbook from "../../src/domain/Playbook"
import Module from "../../src/domain/Module"

describe("Contract", () => {
  it("should be created from given playbook", () => {
    const playbook: Playbook = new Playbook()

    const contract = Contract.fromPlaybook(playbook)
    expect(contract.playbook).toBe(playbook)
  })

  it("should return the modules of playbook", () => {
    const playbook = new Playbook()
    playbook.addModule(new Module(1, "foo"))

    const contract = Contract.fromPlaybook(playbook)

    expect(contract.getModules).toBe(playbook.modules)
    expect(contract.getModules[0].text).toBe("foo")
  })
})
