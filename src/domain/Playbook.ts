import Module from "./Module"

export default class Playbook {
  public readonly modules: Module[]

  constructor() {
    this.modules = []
  }

  addModule(module: Module) {
    const length = this.modules.length
    const lastModule = length === 0 ? null : this.modules[length - 1]
    if (lastModule) {
      module.prev = lastModule.id
      lastModule.next = module.id
    }
    this.modules.push(module)
  }

  addModules(...modules: Module[]) {
    modules.forEach((module) => this.addModule(module))
  }
}
