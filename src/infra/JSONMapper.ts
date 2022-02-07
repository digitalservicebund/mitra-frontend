import {
  Answer,
  Choice,
  MultipleChoiceAnswer,
  RichTextAnswer,
  SingleChoiceAnswer,
  TextAnswer,
  Row,
  SheetAnswer,
} from "../domain/Answer"
import Contract from "../domain/Contract"
import Module from "../domain/Module"
import Playbook from "../domain/Playbook"
import {
  MultipleChoiceAnswerStep,
  RichTextAnswerStep,
  SingleChoiceAnswerStep,
  Step,
  TextAnswerStep,
  SheetAnswerStep,
} from "../domain/Step"

export type ChoiceDTO = {
  text: string
  path: StepDTO[]
}

export type TextAnswerDTO = { value: string }

export type RichTextAnswerDTO = { value: string }

export type SingleChoiceAnswerDTO = {
  choices: ChoiceDTO[]
  value: number
}

export type MultipleChoiceAnswerDTO = {
  choices: ChoiceDTO[]
  value: number[]
}

export type SheetAnswerDTO = { value: Row[] }

export type StepDTO = {
  id: string
  answer:
    | TextAnswerDTO
    | SingleChoiceAnswerDTO
    | MultipleChoiceAnswerDTO
    | SheetAnswerDTO
  text: string
  type: string
  produce?: string
  description?: string
}

export type ModuleDTO = { id: string; title: string; steps: StepDTO[] }

export type ContractDTO = {
  contract: { id: string; title: string; modules: ModuleDTO[] }
}

export type PlaybookDTO = {
  playbook: { id: string; title: string; modules: ModuleDTO[] }
}

export function createStep(step: StepDTO): Step<Answer> {
  if (step.type === TextAnswerStep.TYPE) {
    const answer = step.answer as TextAnswerDTO
    return new TextAnswerStep(
      step.text,
      new TextAnswer(answer.value),
      step.produce,
      step.description,
      step.id
    )
  }
  if (step.type === RichTextAnswerStep.TYPE) {
    const answer = step.answer as RichTextAnswerDTO
    return new RichTextAnswerStep(
      step.text,
      new RichTextAnswer(answer.value),
      step.produce,
      step.description,
      step.id
    )
  }
  if (step.type === SingleChoiceAnswerStep.TYPE) {
    const answer = step.answer as SingleChoiceAnswerDTO
    return new SingleChoiceAnswerStep(
      step.text,
      new SingleChoiceAnswer(
        answer.choices.map(
          (choice) => new Choice(choice.text, choice.path.map(createStep))
        ),
        answer.value
      ),
      step.description,
      step.id
    )
  }
  if (step.type === MultipleChoiceAnswerStep.TYPE) {
    const answer = step.answer as MultipleChoiceAnswerDTO
    return new MultipleChoiceAnswerStep(
      step.text,
      new MultipleChoiceAnswer(
        answer.choices.map(
          (choice) => new Choice(choice.text, choice.path.map(createStep))
        ),
        answer.value
      ),
      step.description,
      step.id
    )
  }
  if (step.type === SheetAnswerStep.TYPE) {
    const answer = step.answer as SheetAnswerDTO
    return new SheetAnswerStep(
      step.text,
      new SheetAnswer(answer.value),
      step.produce,
      step.description,
      step.id
    )
  }
  console.error("Step type unknown, cannot deserialize JSON", step)
  throw new Error("Step type unknown")
}

export function createModule(module: ModuleDTO): Module {
  return new Module(module.title, module.steps.map(createStep), module.id)
}

export function createContract({ contract }: ContractDTO): Contract {
  return new Contract(
    contract.title,
    contract.modules.map(createModule),
    contract.id
  )
}

export function createPlaybook({ playbook }: PlaybookDTO): Playbook {
  return new Playbook(
    playbook.title,
    playbook.modules.map(createModule),
    playbook.id
  )
}
