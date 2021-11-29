import Entity from "./Entity"
import { Step } from "./Step"
import type { StepType } from "./Step"

export default class Module extends Entity {
  readonly text: string
  readonly steps: Step<StepType>[]

  constructor(text: string) {
    super()
    this.text = text
    this.steps = []
  }

  addSteps(...steps: Step<StepType>[]) {
    this.steps.push(...steps)
  }
}
