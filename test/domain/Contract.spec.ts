import Contract from "../../src/domain/Contract"
import Module from "../../src/domain/Module"
import Playbook from "../../src/domain/Playbook"
import { TextAnswerStep } from "../../src/domain/Step"

describe("Contract", () => {
  it("can be created from Playbook as blueprint", () => {
    const playbook = new Playbook("foo", [
      new Module("foo", [new TextAnswerStep("foo")]),
    ])
    const contract = Contract.fromPlaybook(playbook)

    // Copy objects as to avoid modifying the original playbook
    expect(contract).not.toBeUndefined()
    expect(contract.modules).not.toEqual(playbook.modules)
    expect(contract.path).not.toEqual(
      playbook.modules.flatMap((module) => module.steps)
    )

    expect(contract.modules).toHaveLength(playbook.modules.length)
    expect(contract.path).toHaveLength(
      playbook.modules.flatMap((module) => module.steps).length
    )
  })

  it("should provide the module a step belongs to", () => {
    const contract = new Contract("foo", [
      new Module("one", [new TextAnswerStep("foo")]),
      new Module("two", [new TextAnswerStep("bar")]),
    ])

    const stepForLookup = contract.path[1]
    expect(contract.getModuleFor(stepForLookup)).toEqual(contract.modules[1])
    // We might have to deal with proxies which are used by Vue extensively..
    expect(contract.getModuleFor(new Proxy(stepForLookup, {}))).toBe(
      contract.modules[1]
    )
  })

  it("should provide traversal forward given a step", () => {
    const contract = new Contract("foo", [
      new Module("one", [new TextAnswerStep("foo")]),
      new Module("two", [new TextAnswerStep("bar")]),
    ])

    const [stepOne, stepTwo] = contract.path
    expect(contract.nextStepInPathAt(stepOne)).toBe(stepTwo)
    expect(contract.nextStepInPathAt(stepTwo)).toBeUndefined()
  })

  it("should provide traversal backward given a step", () => {
    const contract = new Contract("foo", [
      new Module("one", [new TextAnswerStep("foo")]),
      new Module("two", [new TextAnswerStep("bar")]),
    ])

    const [stepOne, stepTwo] = contract.path
    expect(contract.previousStepInPathAt(stepOne)).toBeUndefined()
    expect(contract.previousStepInPathAt(stepTwo)).toBe(stepOne)
  })

  it("holds initial metadata", () => {
    const contract = new Contract("foo", [])
    const { createdAt, savedAt } = contract.metadata
    expect(savedAt).toBeUndefined()
    expect(createdAt.getSeconds()).toBeCloseTo(new Date().getSeconds())
  })

  it("allows to update metadata", () => {
    const contract = new Contract("foo", [])
    const savedAt = new Date()
    contract.updateMetadata({ savedAt })
    expect(contract.metadata.savedAt).toEqual(savedAt)
  })

  it("won't serialize with metadata automatically", () => {
    const contract = new Contract("foo", [])
    expect(JSON.stringify(contract)).not.toMatch("metadata")
  })
})
