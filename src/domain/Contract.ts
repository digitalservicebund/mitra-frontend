import Entity from "./Entity"
import Playbook from "./Playbook"
import Module from "./Module"
import { Step } from "./Step"
import type { StepType } from "./Step"

export default class Contract extends Entity {
  constructor(public title: string, private playbook: Playbook) {
    super()
  }

  static fromPlaybook(playbook: Playbook): Contract {
    return new Contract("", playbook)
  }

  getFirstUnansweredStep(): Step<StepType> | undefined {
    return this.playbook.modules
      .flatMap((module) => module.steps)
      .find((step) => step.isUnanswered())
  }

  getAllSteps(): Step<StepType>[] {
    return this.playbook.modules.flatMap((module) => module.steps)
  }

  getAllModules(): Module[] {
    return this.playbook.modules
  }

  getModuleFor(step: Step<StepType>): Module | undefined {
    return this.playbook.modules.find((module) =>
      module.steps.find((x) => x.equals(step))
    )
  }
}
