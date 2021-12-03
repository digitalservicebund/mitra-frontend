import Entity from "./Entity"

class TextAnswer {
  constructor(private answer?: string) {}
  getAnswer(): string | undefined {
    return this.answer
  }
  setAnswer(answer: string): void {
    this.answer = answer
  }
}

export type StepType = TextAnswer

export abstract class Step<T extends StepType> extends Entity {
  constructor(public readonly text: string, private answer: T) {
    super()
  }

  abstract getType(): string

  getAnswer(): string {
    return this.answer.getAnswer() || ""
  }

  setAnswer(answer: string): void {
    this.answer.setAnswer(answer)
  }

  isUnanswered(): boolean {
    return !this.answer.getAnswer()
  }
}

export class TextAnswerStep extends Step<TextAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "TextAnswerStep"

  constructor(text: string) {
    super(text, new TextAnswer())
  }

  getType(): string {
    return TextAnswerStep.TYPE
  }
}
