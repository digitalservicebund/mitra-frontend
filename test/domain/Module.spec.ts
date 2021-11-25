import Module from "../../src/domain/Module"

describe("Module", () => {
  it("should be instantiated with zero steps", () => {
    const module = new Module("foo")

    expect(module.steps).toEqual([])
  })

  it("should add the first step", () => {
    const module = new Module("foo")
    module.addStep({ text: "bar" })

    expect(module.steps.length).toEqual(1)
    expect(module.steps[0]).toEqual({ text: "bar" })
  })

  it("should add multiple steps", () => {
    const module = new Module("foo")
    module.addSteps({ text: "bar" }, { text: "baz" }, { text: "fizz" })

    expect(module.steps.length).toEqual(3)
    expect(module.steps[0]).toEqual({ text: "bar" })
    expect(module.steps[1]).toEqual({ text: "baz" })
    expect(module.steps[2]).toEqual({ text: "fizz" })
  })
})
