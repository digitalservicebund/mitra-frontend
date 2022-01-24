import Entity from "./Entity"
import Module from "./Module"

export default class Playbook extends Entity {
  constructor(
    public title: string,
    public readonly modules: Module[] = [],
    id?: string
  ) {
    super(id)
  }

  addModules(...modules: Module[]) {
    this.modules.push(...modules)
  }
}
