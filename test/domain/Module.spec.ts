import Module from "../../src/domain/Module"
import { TextAnswerStep } from "../../src/domain/Step"

describe("Module", () => {
  it("should be instantiated with zero steps", () => {
    const module = new Module("foo")

    expect(module.steps).toEqual([])
  })

  it("should add step at end if index not specified", () => {
    const module = new Module("foo module", [new TextAnswerStep("foo step")])
    module.addStep(new TextAnswerStep("bar step"))

    expect(module.steps.length).toEqual(2)
    expect(module.steps[1].text).toEqual("bar step")
  })

  it("should add step at specified index", () => {
    const module = new Module("foo module", [
      new TextAnswerStep("first step"),
      new TextAnswerStep("second step"),
      new TextAnswerStep("third step"),
    ])
    module.addStep(new TextAnswerStep("foo step"), 1)

    expect(module.steps.length).toEqual(4)
    expect(module.steps[1].text).toEqual("foo step")
  })

  it("should duplicate step inplace", () => {
    const step1 = new TextAnswerStep("foo step")
    const step2 = new TextAnswerStep("bar step")
    const module = new Module("foo module", [step1, step2])

    module.duplicateStep(step1)

    expect(module.steps.length).toEqual(3)
    expect(module.steps[0].text).toEqual("foo step")
    expect(module.steps[1].text).toEqual("Kopie von foo step")
  })

  it("should not duplicate step that does not exist in module", () => {
    const step1 = new TextAnswerStep("foo step")
    const step2 = new TextAnswerStep("bar step")
    const module = new Module("foo module", [step1])

    expect(() => module.duplicateStep(step2)).toThrowError()
  })
})
