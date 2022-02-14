import Entity from "./Entity"
import Metadata from "./Metadata"
import Module from "./Module"

interface Playbook {
  metadata: Metadata
}

class Playbook extends Entity {
  #metadata: Metadata

  constructor(
    public title: string = "Unbenanntes Playbook",
    public readonly modules: Module[] = [],
    id?: string
  ) {
    super(id)
    this.#metadata = { createdAt: new Date() }

    // Workaround limitation of proxies and class names with private fields..
    Object.defineProperty(this, "metadata", {
      get: () => this.#metadata,
    })
  }

  updateMetadata(data: Partial<Metadata>): Playbook {
    this.#metadata = { ...this.#metadata, ...data }
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

export default Playbook
