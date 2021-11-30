import Entity from "./Entity"

interface Informational {
  getAnswer(): undefined
}
interface TextAnswer {
  getAnswer(): string
}

export type StepType = Informational | TextAnswer

export abstract class Step<T extends StepType> extends Entity {
  constructor(public text: string, public answer: T) {
    super()
  }

  getText(): string {
    return this.text
  }

  getAnswer(): T {
    return this.answer
  }
}

export class InformationalStep extends Step<Informational> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static type = "Informational"

  constructor(text: string) {
    super(text, {} as Informational)
  }
}

export class TextAnswerStep extends Step<TextAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static type = "TextAnswer"

  constructor(text: string) {
    super(text, {} as TextAnswer)
  }
}
