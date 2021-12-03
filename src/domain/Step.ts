import Entity from "./Entity"

export abstract class Answer {
  abstract getAnswer(): unknown
  abstract setAnswer(answer: unknown): void
  abstract toString(): string
}

export class TextAnswer extends Answer {
  constructor(private answer: string = "") {
    super()
  }
  getAnswer(): string {
    return this.answer
  }
  setAnswer(answer: string): void {
    this.answer = answer
  }
  toString(): string {
    return this.answer
  }
}

export abstract class Step<T extends Answer> extends Entity {
  constructor(public readonly text: string, protected answer: T) {
    super()
  }

  abstract getType(): string
  abstract clone(): Step<T>

  getAnswer(): T {
    return this.answer
  }

  setAnswer(answer: T): void {
    this.answer.setAnswer(answer)
  }

  isUnanswered(): boolean {
    return !this.answer.getAnswer()
  }

  static fromJson(jsonStep: Step<Answer>) {
    return new TextAnswerStep(jsonStep.text)
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
