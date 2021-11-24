import { Step } from "./Step"

export default class Module {
  readonly id: number
  readonly text: string
  readonly steps: Step[]
  public next?: number
  public prev?: number

  constructor(id: number, text: string) {
    this.id = id
    this.text = text
    this.steps = []
  }

  addStep(step: Step) {
    const length = this.steps.length
    const lastStep = length === 0 ? null : this.steps[length - 1]
    if (lastStep) {
      step.prev = lastStep.id
      lastStep.next = step.id
    }
    this.steps.push(step)
  }

  addSteps(...steps: Step[]) {
    steps.forEach((step) => this.addStep(step))
  }
}
