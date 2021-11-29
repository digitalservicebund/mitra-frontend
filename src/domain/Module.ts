import { Step } from "./Step"

export default class Module {
  readonly text: string
  readonly steps: Step[]

  constructor(text: string) {
    this.text = text
    this.steps = []
  }

  addSteps(...steps: Step[]) {
    this.steps.push(...steps)
  }
}
