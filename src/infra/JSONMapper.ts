import Contract from "../domain/Contract"
import Module from "../domain/Module"
import Playbook from "../domain/Playbook"
import {
  Answer,
  SingleChoiceAnswer,
  SingleChoiceAnswerStep,
  Step,
  TextAnswer,
  TextAnswerStep,
} from "../domain/Step"

function createModule(jsonModule: Module) {
  const steps: Step<Answer>[] = jsonModule.steps.map(createStep)
  return new Module(jsonModule.text, steps, jsonModule.id)
}

function createStep(jsonStep: Step<Answer>) {
  if (jsonStep.type === TextAnswerStep.TYPE) {
    return new TextAnswerStep(
      jsonStep.text,
      new TextAnswer((jsonStep.answer as TextAnswer).value),
      (jsonStep as TextAnswerStep).produce,
      jsonStep.id
    )
  }
  if (jsonStep.type === SingleChoiceAnswerStep.TYPE) {
    return new SingleChoiceAnswerStep(
      jsonStep.text,
      new SingleChoiceAnswer(
        (jsonStep.answer as SingleChoiceAnswer).choices,
        (jsonStep.answer as SingleChoiceAnswer).value
      ),
      jsonStep.id
    )
  }
  throw new Error("Step type unknown")
}

export function createPlaybook(jsonPlaybook: Playbook) {
  const modules: Module[] = jsonPlaybook.modules.map(createModule)
  return new Playbook(modules, jsonPlaybook.id)
}

export function createContract(jsonContract: Contract) {
  const modules: Module[] = jsonContract.modules.map(createModule)
  return new Contract(jsonContract.title, modules, jsonContract.id)
}
