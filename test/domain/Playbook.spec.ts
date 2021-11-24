import Module from "../../src/domain/Module"
import Playbook from "../../src/domain/Playbook"

describe("Playbook", () => {
  it("should be instantiated with zero modules", () => {
    const playbook = new Playbook()

    expect(playbook.modules).toEqual([])
  })

  it("should add the first module with no references", () => {
    const playbook = new Playbook()
    const module = new Module(1, "foo")
    playbook.addModule(module)

    expect(playbook.modules.length).toEqual(1)
    expect(playbook.modules[0]).toEqual({ id: 1, text: "foo", steps: [] })
  })

  it("should add references when adding multiple modules", () => {
    const playbook = new Playbook()
    const module1 = new Module(1, "foo")
    const module2 = new Module(2, "bar")
    const module3 = new Module(3, "baz")

    playbook.addModules(module1, module2, module3)

    expect(playbook.modules.length).toEqual(3)
    expect(playbook.modules[0]).toEqual({
      id: 1,
      text: "foo",
      next: 2,
      steps: [],
    })
    expect(playbook.modules[1]).toEqual({
      id: 2,
      text: "bar",
      prev: 1,
      next: 3,
      steps: [],
    })
    expect(playbook.modules[2]).toEqual({
      id: 3,
      text: "baz",
      prev: 2,
      steps: [],
    })
  })
})
