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

    expect(playbook.modules).toEqual([module])
  })

  it("should add references when adding multiple modules", () => {
    const playbook = new Playbook()
    const modules = [new Module("foo"), new Module("bar"), new Module("baz")]
    playbook.addModules(...modules)

    expect(playbook.modules).toEqual(modules)
  })
})
