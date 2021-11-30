import Entity from "./Entity"
import Module from "./Module"

export default class Playbook extends Entity {
  public readonly modules: Module[]

  constructor(modules: Module[] = []) {
    super()
    this.modules = modules
  }

  addModules(...modules: Module[]) {
    this.modules.push(...modules)
  }
}
