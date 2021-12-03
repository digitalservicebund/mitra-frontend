import Entity from "./Entity"
import { Answer, Step } from "./Step"

export default class Module extends Entity {
  constructor(
    public readonly text: string,
    public readonly steps: Step<Answer>[] = []
  ) {
    super()
  }

  addSteps(...steps: Step<Answer>[]) {
    this.steps.push(...steps)
  }

  clone(): Module {
    return new Module(
      this.text,
      this.steps.map((step) => step.clone())
    )
  }

  static fromJson(jsonModule: Module) {
    const steps: Step<Answer>[] = jsonModule.steps.map(Step.fromJson)
    return new Module(jsonModule.text, steps)
  }
}
