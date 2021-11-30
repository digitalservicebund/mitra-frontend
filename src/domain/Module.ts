import Entity from "./Entity"
import { Step } from "./Step"
import type { StepType } from "./Step"

export default class Module extends Entity {
  constructor(
    public readonly text: string,
    public readonly steps: Step<StepType>[] = []
  ) {
    super()
  }

  addSteps(...steps: Step<StepType>[]) {
    this.steps.push(...steps)
  }
}
