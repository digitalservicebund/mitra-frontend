import Entity from "./Entity"
import Module from "./Module"

export default class Playbook extends Entity {
  public readonly modules: Module[]

  constructor() {
    super()
    this.modules = []
  }

  addModules(...modules: Module[]) {
    this.modules.push(...modules)
  }
}
