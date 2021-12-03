import Entity from "./Entity"
import Playbook from "./Playbook"
import Module from "./Module"
import { Step } from "./Step"
import type { StepType } from "./Step"

export default class Contract extends Entity {
  constructor(public title: string, private modules: Module[]) {
    super()
  }

  static fromPlaybook(playbook: Playbook): Contract {
    const modules: Module[] = playbook.modules.map((module) => module.clone())
    return new Contract("", modules)
  }

  getSteps(): Step<StepType>[] {
    return this.modules.flatMap((module) => module.steps)
  }

  getNextStepFor(step: Step<StepType>): Step<StepType> | undefined {
    return this.getSteps()[this.#findStepIndex(step) + 1]
  }

  getPreviousStepFor(step: Step<StepType>): Step<StepType> | undefined {
    return this.getSteps()[this.#findStepIndex(step) - 1]
  }

  getModules(): Module[] {
    return this.modules
  }

  getModuleFor(step: Step<StepType>): Module | undefined {
    return this.modules.find((module) =>
      module.steps.find((x) => x.equals(step))
    )
  }

  #findStepIndex(step: Step<StepType>): number {
    return this.getSteps().findIndex((x) => x.equals(step))
  }
}
