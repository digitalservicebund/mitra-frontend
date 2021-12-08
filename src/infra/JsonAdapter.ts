import Playbook from "../domain/Playbook"
import Module from "../domain/Module"
import { Answer, Step, TextAnswer, TextAnswerStep } from "../domain/Step"
import Contract from "../domain/Contract"

export function createPlaybook(jsonPlaybook: Playbook) {
  const modules: Module[] = jsonPlaybook.modules.map(createModule)
  return new Playbook(modules)
}

export function createContract(jsonContract: Contract) {
  const modules: Module[] = jsonContract.modules.map(createModule)
  return new Contract(jsonContract.title, modules)
}

function createModule(jsonModule: Module) {
  const steps: Step<Answer>[] = jsonModule.steps.map(createStep)
  return new Module(jsonModule.text, steps)
}

function createStep(jsonStep: Step<Answer>) {
  if (TextAnswerStep.TYPE === jsonStep.type) {
    return new TextAnswerStep(
      jsonStep.text,
      new TextAnswer((jsonStep.answer as TextAnswer).value)
    )
  }
  return new TextAnswerStep("")
}
