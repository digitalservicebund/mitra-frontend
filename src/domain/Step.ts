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
  constructor(public readonly text: string, protected answer: T) {
    super()
  }

  abstract getType(): string
  abstract clone(): Step<T>

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

  constructor(text: string, answer: TextAnswer = new TextAnswer()) {
    super(text, answer)
  }

  getType(): string {
    return TextAnswerStep.TYPE
  }

  clone(): Step<TextAnswer> {
    return new TextAnswerStep(this.text, this.answer)
  }
}
