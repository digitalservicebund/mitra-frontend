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
})
