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

  it("should return module by id", () => {
    const playbook = new Playbook()
    const module1 = new Module("foo")
    const module2 = new Module("bar")
    playbook.addModules(module1, module2)

    expect(playbook.findModuleById(module2.id).title).toEqual("bar")
  })

  it("holds initial metadata", () => {
    const playbook = new Playbook()
    const { createdAt, savedAt } = playbook.metadata
    expect(savedAt).toBeUndefined()
    expect(createdAt.getSeconds()).toBeCloseTo(new Date().getSeconds())
  })

  it("allows to update metadata", () => {
    const playbook = new Playbook()
    const savedAt = new Date()
    playbook.updateMetadata({ savedAt })
    expect(playbook.metadata.savedAt).toEqual(savedAt)
  })

  it("removes Module", () => {
    const module1 = new Module("foo")
    const module2 = new Module("bar")
    const playbook = new Playbook("foo playbook", [module1, module2])
    playbook.removeModule(module1)
    expect(playbook.modules.length).toEqual(1)
    expect(playbook.modules[0].title).toEqual("bar")
  })
})
