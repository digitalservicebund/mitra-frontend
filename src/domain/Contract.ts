import { Answer } from "./Answer"
import Entity from "./Entity"
import Metadata from "./Metadata"
import Module from "./Module"
import Playbook from "./Playbook"
import { Step } from "./Step"

function findStepIndex(
  steps: readonly Step<Answer>[],
  step: Step<Answer>
): number {
  return steps.findIndex((x) => x.equals(step))
}

export default class Contract extends Entity {
  public readonly metadata: Metadata

  constructor(
    public title: string = "Unbenannter Vertrag",
    public readonly modules: Module[],
    {
      metadata = { createdAt: new Date() },
      id,
    }: { id?: string; metadata?: Metadata } = {}
  ) {
    super(id)
    this.metadata = metadata
  }

  static fromPlaybook(playbook: Playbook): Contract {
    const modules: Module[] = playbook.modules.map((module) => module.clone())
    return new Contract(undefined, modules)
  }

  get path(): readonly Step<Answer>[] {
    return Object.freeze(this.modules.flatMap((module) => module.path))
  }

  nextStepInPathAt(step: Step<Answer>): Step<Answer> | undefined {
    return this.path[findStepIndex(this.path, step) + 1]
  }

  previousStepInPathAt(step: Step<Answer>): Step<Answer> | undefined {
    return this.path[findStepIndex(this.path, step) - 1]
  }

  getModuleFor(step: Step<Answer>): Module | undefined {
    return this.modules.find((module) =>
      module.path.find((x) => x.equals(step))
    )
  }

  updateMetadata(data: Partial<Metadata>): Contract {
    Object.assign(this.metadata, data)
    return this
  }
}
