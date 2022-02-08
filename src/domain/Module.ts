import { Answer } from "./Answer"
import Entity from "./Entity"
import { Step } from "./Step"

export default class Module extends Entity {
  constructor(
    public title: string = "Unbenanntes Modul",
    public steps: Step<Answer>[] = [],
    id?: string
  ) {
    super(id)
  }

  get path(): readonly Step<Answer>[] {
    return Object.freeze(this.steps.flatMap((step) => step.path))
  }

  clone(): Module {
    return new Module(
      this.title,
      this.steps.map((step) => step.clone())
    )
  }

  addStep(step: Step<Answer>, index?: number): void {
    if (!index) index = this.steps.length
    this.steps.splice(index, 0, step)
  }

  duplicateStep(step: Step<Answer>): void {
    if (!this.steps.includes(step)) throw new Error("step not in module")

    const duplicatedStep = step.clone()
    duplicatedStep.prompt = `Kopie von ${step.prompt}`
    this.addStep(duplicatedStep, this.steps.indexOf(step) + 1)
  }

  removeStep(step: Step<Answer>): void {
    this.steps = this.steps.filter((item) => item !== step)
  }
}
