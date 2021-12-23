import Module from "../../src/domain/Module"

describe("Module", () => {
  it("should be instantiated with zero steps", () => {
    const module = new Module("foo")

    expect(module.steps).toEqual([])
  })
})
