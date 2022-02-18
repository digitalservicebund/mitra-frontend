import Entity from "./Entity"
import Metadata from "./Metadata"
import Module from "./Module"

export default class Playbook extends Entity {
  constructor(
    public title: string = "Unbenanntes Playbook",
    public readonly modules: Module[] = [],
    id?: string,
    public readonly metadata: Metadata = { createdAt: new Date() }
  ) {
    super(id)
  }

  updateMetadata(data: Partial<Metadata>): Playbook {
    Object.assign(this.metadata, data)
    return this
  }

  addModules(...modules: Module[]): void {
    this.modules.push(...modules)
  }

  removeModule(module: Module): void {
    this.modules.splice(this.modules.indexOf(module), 1)
  }

  findModuleById(id: string): Module {
    const module = this.modules.find((module) => module.id === id)
    if (module === undefined) {
      throw new Error("Module not found")
    }
    return module
  }
}
