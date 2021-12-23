import Entity from "./Entity"
import Playbook from "./Playbook"
import Module from "./Module"
import { Answer, Step } from "./Step"

function findStepIndex(
  steps: readonly Step<Answer>[],
  step: Step<Answer>
): number {
  return steps.findIndex((x) => x.equals(step))
}
export default class Contract extends Entity {
  constructor(
    public title: string,
    public readonly modules: Module[],
    id?: string
  ) {
    super(id)
  }

  static fromPlaybook(playbook: Playbook): Contract {
    const modules: Module[] = playbook.modules.map((module) => module.clone())
    return new Contract("", modules)
  }

  get path(): Step<Answer>[] {
    return this.modules
      .flatMap((module) => module.steps)
      .flatMap((step) => step.path)
  }

  nextStepInPathAt(step: Step<Answer>): Step<Answer> | undefined {
    return this.path[findStepIndex(this.path, step) + 1]
  }

  previousStepInPathAt(step: Step<Answer>): Step<Answer> | undefined {
    return this.path[findStepIndex(this.path, step) - 1]
  }

  getForeseeableSteps(): readonly Step<Answer>[] {
    return Object.freeze(this.modules.flatMap((module) => module.steps))
  }

  getModuleFor(step: Step<Answer>): Module | undefined {
    return this.modules.find((module) =>
      module.steps.find((x) => x.equals(step))
    )
  }
}
