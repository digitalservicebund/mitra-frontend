import Module from "../../src/domain/Module"
import { TextStep } from "../../src/domain/Step"

describe("Module", () => {
  it("should be instantiated with zero steps", () => {
    const module = new Module("foo")

    expect(module.steps).toEqual([])
  })

  it("should add the first step", () => {
    const module = new Module("foo")
    module.addSteps(new TextStep("bar"))

    expect(module.steps.length).toEqual(1)
    expect(module.steps[0].text).toEqual("bar")
  })

  it("should add multiple steps", () => {
    const module = new Module("foo")
    module.addSteps(
      new TextStep("bar"),
      new TextStep("baz"),
      new TextStep("fizz")
    )

    expect(module.steps.length).toEqual(3)
    expect(module.steps[0].text).toEqual("bar")
    expect(module.steps[1].text).toEqual("baz")
    expect(module.steps[2].text).toEqual("fizz")
  })
})
