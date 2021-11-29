import Module from "../../src/domain/Module"
import Playbook from "../../src/domain/Playbook"

describe("Playbook", () => {
  it("should be instantiated with zero modules", () => {
    const playbook = new Playbook()

    expect(playbook.modules).toEqual([])
  })

  it("should add the first module with no references", () => {
    const playbook = new Playbook()
    const module = new Module("foo")
    playbook.addModules(module)

    expect(playbook.modules.length).toEqual(1)
    expect(playbook.modules[0]).toEqual({ text: "foo", steps: [] })
  })

  it("should add references when adding multiple modules", () => {
    const playbook = new Playbook()
    const module1 = new Module("foo")
    const module2 = new Module("bar")
    const module3 = new Module("baz")

    playbook.addModules(module1, module2, module3)

    expect(playbook.modules.length).toEqual(3)
    expect(playbook.modules[0]).toEqual({
      text: "foo",
      steps: [],
    })
    expect(playbook.modules[1]).toEqual({
      text: "bar",
      steps: [],
    })
    expect(playbook.modules[2]).toEqual({
      text: "baz",
      steps: [],
    })
  })
})
