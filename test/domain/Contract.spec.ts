import Contract from "../../src/domain/Contract"
import Playbook from "../../src/domain/Playbook"
import Module from "../../src/domain/Module"
import { TextAnswerStep } from "../../src/domain/Step"

describe("Contract", () => {
  it("should be created from given playbook", () => {
    const playbook: Playbook = new Playbook()

    const contract = Contract.fromPlaybook(playbook)
    expect(contract.playbook).toBe(playbook)
  })

  it("should return the modules of playbook", () => {
    const playbook = new Playbook()
    playbook.addModules(new Module("foo"))

    const contract = Contract.fromPlaybook(playbook)

    expect(contract.getModules).toBe(playbook.modules)
    expect(contract.getModules[0].text).toBe("foo")
  })
})

describe("Contract prev/next", () => {
  let playbook: Playbook

  beforeEach(() => {
    playbook = new Playbook()
    const module1 = new Module("foo")
    module1.addSteps(
      new TextAnswerStep("foo"),
      new TextAnswerStep("bar"),
      new TextAnswerStep("baz")
    )
    const module2 = new Module("bar")
    module2.addSteps(new TextAnswerStep("foo"))
    playbook.addModules(module1, module2)
  })

  it("should have next if not last step in module", () => {
    const contract = new Contract(playbook, 0, 0)

    expect(contract.hasNext()).toBe(true)
  })

  it("should have next if last step in intermediate module", () => {
    const contract = new Contract(playbook, 0, 2)

    expect(contract.hasNext()).toBe(true)
  })

  it("should not have next if last step in last module", () => {
    const contract = new Contract(playbook, 1, 0)

    expect(contract.hasNext()).toBe(false)
  })

  it("should not have next on empty modules", () => {
    const contract = new Contract(new Playbook(), 0, 0)

    expect(contract.hasNext()).toBe(false)
  })

  it("should have prev if not first step in first module", () => {
    const contract = new Contract(playbook, 0, 1)

    expect(contract.hasPrev()).toBe(true)
  })

  it("should have prev if first step in subsequent module", () => {
    const contract = new Contract(playbook, 1, 0)

    expect(contract.hasPrev()).toBe(true)
  })

  it("should not have prev if first step in first module", () => {
    const contract = new Contract(playbook, 0, 0)

    expect(contract.hasPrev()).toBe(false)
  })

  it("should not have prev on empty modules", () => {
    const contract = new Contract(new Playbook(), 0, 0)

    expect(contract.hasPrev()).toBe(false)
  })

  it("should retain current refs if there are no previous steps", () => {
    const contract = new Contract(playbook, 0, 0)

    contract.prevStep()

    expect(contract.currentModuleId).toBe(0)
    expect(contract.currentStepId).toBe(0)
  })

  it("should decrement currentStepId", () => {
    const contract = new Contract(playbook, 0, 2)

    contract.prevStep()

    expect(contract.currentModuleId).toBe(0)
    expect(contract.currentStepId).toBe(1)
  })

  it("should decrement currentModuleId if current step is the first in module", () => {
    const contract = new Contract(playbook, 1, 0)

    contract.prevStep()

    expect(contract.currentModuleId).toBe(0)
    expect(contract.currentStepId).toBe(2)
  })

  it("should retain current refs if there are no next steps", () => {
    const contract = new Contract(playbook, 1, 0)

    contract.nextStep()

    expect(contract.currentModuleId).toBe(1)
    expect(contract.currentStepId).toBe(0)
  })

  it("should increment currentStepId", () => {
    const contract = new Contract(playbook, 0, 0)

    contract.nextStep()

    expect(contract.currentModuleId).toBe(0)
    expect(contract.currentStepId).toBe(1)
  })

  it("should increment currentModuleId if current step is the last in module", () => {
    const contract = new Contract(playbook, 0, 2)

    contract.nextStep()

    expect(contract.currentModuleId).toBe(1)
    expect(contract.currentStepId).toBe(0)
  })
})
