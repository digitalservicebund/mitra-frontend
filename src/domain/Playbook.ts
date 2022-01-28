import Entity from "./Entity"
import Metadata from "./Metadata"
import Module from "./Module"

export default class Playbook extends Entity {
  #metadata: Metadata

  constructor(
    public title: string = "Unbenanntes Playbook",
    public readonly modules: Module[] = [],
    id?: string
  ) {
    super(id)
    this.#metadata = { createdAt: new Date() }
  }

  get metadata(): Metadata {
    return Object.freeze(this.#metadata)
  }

  updateMetadata(data: Partial<Metadata>): Playbook {
    this.#metadata = { ...this.#metadata, ...data }
    return this
  }

  addModules(...modules: Module[]): void {
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
