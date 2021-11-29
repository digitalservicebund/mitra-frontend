import Entity from "./Entity"
import Playbook from "./Playbook"
import Module from "./Module"
import { Step } from "./Step"
import type { StepType } from "./Step"

export default class Contract extends Entity {
  title: string
  playbook: Playbook
  answers: Map<string, string>

  // any modification of these values must guarantee that the referenced module and step exist.
  private _currentModuleId: number
  private _currentStepId: number

  constructor(playbook: Playbook, currentModuleId = 0, currentStepId = 0) {
    super()
    this.title = ""
    this.playbook = playbook
    this._currentModuleId = currentModuleId
    this._currentStepId = currentStepId
    this.answers = new Map()
  }

  static fromPlaybook(playbook: Playbook): Contract {
    return new Contract(playbook)
  }

  get currentStepId() {
    return this._currentStepId
  }

  get currentModuleId() {
    return this._currentModuleId
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
    return this.getModules[this._currentModuleId]
  }

  getCurrentStep(): Step<StepType> {
    return this.getCurrentModule()?.steps[this._currentStepId]
  }

  hasPrev(): boolean {
    return this.hasPrevStep() || this.hasPrevModule()
  }

  hasNext(): boolean {
    return this.hasNextStep() || this.hasNextModule()
  }

  nextStep(): void {
    if (this.hasNextStep()) {
      this._currentStepId++
    } else if (this.hasNextModule()) {
      this._currentModuleId++
      this._currentStepId = 0
    }
  }

  prevStep(): void {
    if (this.hasPrevStep()) {
      this._currentStepId--
    } else if (this.hasPrevModule()) {
      this._currentModuleId--
      this._currentStepId = this.getCurrentModule().steps.length - 1
    }
  }

  private hasPrevModule() {
    return this._currentModuleId > 0
  }

  private hasPrevStep() {
    return this._currentStepId > 0
  }

  private hasNextModule(): boolean {
    return this._currentModuleId < this.getModules.length - 1
  }

  private hasNextStep(): boolean {
    return this._currentStepId < this.getCurrentModule()?.steps.length - 1
  }
}
