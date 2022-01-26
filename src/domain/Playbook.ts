import Entity from "./Entity"
import Module from "./Module"

export default class Playbook extends Entity {
  constructor(
    public title: string = "Unbenanntes Playbook",
    public readonly modules: Module[] = [],
    id?: string
  ) {
    super(id)
  }

  addModules(...modules: Module[]) {
    this.modules.push(...modules)
  }

  findModuleById(id: string): Module {
    const module = this.modules.find((module) => module.id === id)
    if (module === undefined) {
      throw new Error("Module not found")
    }
    return module
  }
}
