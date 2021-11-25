import Module from "./Module"

export default class Playbook {
  public readonly modules: Module[]

  constructor() {
    this.modules = []
  }

  addModule(module: Module) {
    this.modules.push(module)
  }

  addModules(...modules: Module[]) {
    modules.forEach((module) => this.addModule(module))
  }
}
