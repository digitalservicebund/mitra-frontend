import Module from "./Module"

export default class Playbook {
  public readonly modules: Module[]

  constructor() {
    this.modules = []
  }

  addModules(...modules: Module[]) {
    this.modules.push(...modules)
  }
}
