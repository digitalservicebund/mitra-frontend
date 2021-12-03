import Entity from "./Entity"
import Module from "./Module"

export default class Playbook extends Entity {
  constructor(public readonly modules: Module[] = []) {
    super()
  }

  addModules(...modules: Module[]) {
    this.modules.push(...modules)
  }

  static fromJson(jsonPlaybook: Playbook) {
    const modules: Module[] = jsonPlaybook.modules.map(Module.fromJson)
    return new Playbook(modules)
  }
}
