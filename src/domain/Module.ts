import { Step } from "./Step"

export default class Module {
  readonly text: string
  readonly steps: Step[]

  constructor(text: string) {
    this.text = text
    this.steps = []
  }

  addStep(step: Step) {
    this.steps.push(step)
  }

  addSteps(...steps: Step[]) {
    steps.forEach((step) => this.addStep(step))
  }
}
