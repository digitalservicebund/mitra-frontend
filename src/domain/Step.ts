import { v4 as uuid } from "uuid"

interface Informational {
  getAnswer(): undefined
}
interface TextAnswer {
  getAnswer(): string
}

export type StepType = Informational | TextAnswer

export abstract class Step<T extends StepType> {
  uuid: string
  text: string
  answer: T

  constructor(text: string, answer: T) {
    this.uuid = uuid()
    this.text = text
    this.answer = answer
  }

  getText(): string {
    return this.text
  }

  getAnswer(): T {
    return this.answer
  }
}

export class TextStep extends Step<TextAnswer> {
  constructor(text: string) {
    super(text, {} as TextAnswer)
  }
}
