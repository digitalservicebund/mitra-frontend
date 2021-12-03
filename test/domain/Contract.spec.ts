import Contract from "../../src/domain/Contract"
import Playbook from "../../src/domain/Playbook"
import Module from "../../src/domain/Module"
import { TextAnswerStep } from "../../src/domain/Step"

describe("Contract", () => {
  it("should hold the modules of a playbook", () => {
    const playbook = new Playbook([new Module("foo")])
    const contract = Contract.fromPlaybook(playbook)
    expect(contract.getAllModules()).toEqual(playbook.modules)
  })

  it("should provide the module a step belongs to", () => {
    const stepForLookup = new TextAnswerStep("foo")
    const playbook = new Playbook([
      new Module("one"),
      new Module("two", [new TextAnswerStep("foo")]),
      new Module("three", [stepForLookup]),
    ])
    const contract = Contract.fromPlaybook(playbook)
    expect(contract.getModuleFor(stepForLookup)).toEqual(playbook.modules[2])
    // We might have to deal with proxies which are used by Vue extensively..
    expect(contract.getModuleFor(new Proxy(stepForLookup, {}))).toBe(
      playbook.modules[2]
    )
  })
})
