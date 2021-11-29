import Entity from "./Entity"

interface Informational {
  getAnswer(): undefined
}
interface TextAnswer {
  getAnswer(): string
}

export type StepType = Informational | TextAnswer

export abstract class Step<T extends StepType> extends Entity {
  text: string
  answer: T

  constructor(text: string, answer: T) {
    super()
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
