import Playbook from "../domain/Playbook"
import Module from "../domain/Module"
import { Answer, Step, TextAnswerStep } from "../domain/Step"

export function createPlaybook(jsonPlaybook: Playbook) {
  const modules: Module[] = jsonPlaybook.modules.map(createModule)
  return new Playbook(modules)
}

function createModule(jsonModule: Module) {
  const steps: Step<Answer>[] = jsonModule.steps.map(createStep)
  return new Module(jsonModule.text, steps)
}

function createStep(jsonStep: Step<Answer>) {
  return new TextAnswerStep(jsonStep.text)
}
