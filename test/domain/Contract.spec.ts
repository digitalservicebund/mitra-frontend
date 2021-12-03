import Contract from "../../src/domain/Contract"
import Playbook from "../../src/domain/Playbook"
import Module from "../../src/domain/Module"
import { TextAnswerStep } from "../../src/domain/Step"

describe("Contract", () => {
  it("can be created from Playbook as blueprint", () => {
    const playbook = new Playbook([
      new Module("foo", [new TextAnswerStep("foo")]),
    ])
    const contract = Contract.fromPlaybook(playbook)

    // Copy objects as to avoid modifying the original playbook
    expect(contract.getModules()).not.toEqual(playbook.modules)
    expect(contract.getSteps()).not.toEqual(
      playbook.modules.flatMap((m) => m.steps)
    )

    expect(contract.getModules()).toHaveLength(playbook.modules.length)
    expect(contract.getSteps()).toHaveLength(
      playbook.modules.flatMap((m) => m.steps).length
    )
  })

  it("should provide the module a step belongs to", () => {
    const playbook = new Playbook([
      new Module("one"),
      new Module("two", [new TextAnswerStep("foo")]),
      new Module("three", [new TextAnswerStep("bar")]),
    ])
    const contract = Contract.fromPlaybook(playbook)

    const stepForLookup = contract.getSteps()[1]
    expect(contract.getModuleFor(stepForLookup)).toEqual(
      contract.getModules()[2]
    )
    // We might have to deal with proxies which are used by Vue extensively..
    expect(contract.getModuleFor(new Proxy(stepForLookup, {}))).toBe(
      contract.getModules()[2]
    )
  })
})
