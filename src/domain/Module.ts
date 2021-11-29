import { Step } from "./Step"
import type { StepType } from "./Step"

export default class Module {
  readonly text: string
  readonly steps: Step<StepType>[]

  constructor(text: string) {
    this.text = text
    this.steps = []
  }

  addSteps(...steps: Step<StepType>[]) {
    this.steps.push(...steps)
  }
}
