import Entity from "./Entity"
import Playbook from "./Playbook"
import Module from "./Module"
import { Step } from "./Step"
import type { StepType } from "./Step"

export default class Contract extends Entity {
  title: string
  playbook: Playbook
  currentModuleId: number
  currentStepId: number
  answers: Map<string, string>

  constructor(playbook: Playbook, currentModuleId = 0, currentStepId = 0) {
    super()
    this.title = ""
    this.playbook = playbook
    this.currentModuleId = currentModuleId
    this.currentStepId = currentStepId
    this.answers = new Map()
  }

  static fromPlaybook(playbook: Playbook): Contract {
    return new Contract(playbook)
  }

  getCurrentStepAnswer(): string | undefined {
    return this.answers.get(this.getCurrentStep()?.id)
  }

  updateCurrentStepAnswer(answer?: string) {
    if (answer) {
      this.answers.set(this.getCurrentStep()?.id, answer)
    } else {
      this.answers.set(this.getCurrentStep()?.id, "")
    }
  }

  get getModules() {
    return this.playbook.modules
  }

  getCurrentModule(): Module {
    return this.getModules[this.currentModuleId]
  }

  getCurrentStep(): Step<StepType> {
    return this.getCurrentModule()?.steps[this.currentStepId]
  }

  hasPrev(): boolean {
    return this.currentStepId > 0 || this.currentModuleId > 0
  }

  hasNext(): boolean {
    return this.hasNextStep() || this.hasNextModule()
  }

  nextStep(): void {
    if (this.hasNextStep()) {
      this.currentStepId++
    } else if (this.hasNextModule()) {
      this.currentModuleId++
      this.currentStepId = 0
    }
  }

  prevStep(): void {
    if (this.currentStepId > 0) {
      this.currentStepId--
    } else if (this.currentModuleId > 0) {
      this.currentModuleId--
      this.currentStepId = this.getCurrentModule().steps.length - 1
    }
  }

  private hasNextModule(): boolean {
    return this.currentModuleId < this.getModules.length - 1
  }

  private hasNextStep(): boolean {
    return this.currentStepId < this.getCurrentModule()?.steps.length - 1
  }
}
