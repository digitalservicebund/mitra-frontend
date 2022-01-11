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

export type TextAnswerDTO = { value: string }

export type ChoiceDTO = {
  text: string
  path: StepDTO[]
}

export type SingleChoiceAnswerDTO = {
  choices: ChoiceDTO[]
  value: number
}

export type StepDTO = {
  id: string
  answer: TextAnswerDTO | SingleChoiceAnswerDTO
  text: string
  type: string
  produce?: string
}

export type ModuleDTO = { id: string; text: string; steps: StepDTO[] }

export type ContractDTO = { id: string; title: string; modules: ModuleDTO[] }

export type PlaybookDTO = { id: string; modules: ModuleDTO[] }

export function createStep(step: StepDTO): Step<Answer> {
  if (step.type === TextAnswerStep.TYPE) {
    const answer = step.answer as TextAnswerDTO
    return new TextAnswerStep(
      step.text,
      new TextAnswer(answer.value),
      step.produce,
      step.id
    )
  }
  if (step.type === SingleChoiceAnswerStep.TYPE) {
    const answer = step.answer as SingleChoiceAnswerDTO
    return new SingleChoiceAnswerStep(
      step.text,
      new SingleChoiceAnswer(
        answer.choices.map((choice) => ({
          text: choice.text,
          path: choice.path.map(createStep),
        })),
        answer.value
      ),
      step.id
    )
  }
  throw new Error("Step type unknown")
}

export function createModule(module: ModuleDTO): Module {
  return new Module(module.text, module.steps.map(createStep), module.id)
}

export function createContract(contract: ContractDTO): Contract {
  return new Contract(
    contract.title,
    contract.modules.map(createModule),
    contract.id
  )
}

export function createPlaybook(playbook: PlaybookDTO): Playbook {
  return new Playbook(playbook.modules.map(createModule), playbook.id)
}
