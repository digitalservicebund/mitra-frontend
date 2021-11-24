import Module from "../../src/domain/Module"

describe("Module", () => {
  it("should be instantiated with zero steps", () => {
    const module = new Module(1, "foo")

    expect(module.steps).toEqual([])
  })

  it("should add the first step with no references", () => {
    const module = new Module(1, "foo")
    module.addStep({ id: 1, text: "bar" })

    expect(module.steps.length).toEqual(1)
    expect(module.steps[0]).toEqual({ id: 1, text: "bar" })
  })

  it("should add references when adding multiple steps", () => {
    const module = new Module(1, "foo")
    module.addSteps(
      { id: 1, text: "bar" },
      { id: 2, text: "baz" },
      { id: 3, text: "fizz" }
    )

    expect(module.steps.length).toEqual(3)
    expect(module.steps[0]).toEqual({ id: 1, text: "bar", next: 2 })
    expect(module.steps[1]).toEqual({ id: 2, text: "baz", prev: 1, next: 3 })
    expect(module.steps[2]).toEqual({ id: 3, text: "fizz", prev: 2 })
  })
})
