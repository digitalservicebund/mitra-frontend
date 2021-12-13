import Entity from "./Entity"

export abstract class Answer extends Entity {
  abstract getValue(): unknown
  abstract setValue(answer: unknown): void
  abstract toString(): string
}

export class TextAnswer extends Answer {
  constructor(public value: string = "") {
    super()
  }
  getValue(): string {
    return this.value
  }
  setValue(answer: string): void {
    this.value = answer
  }
  toString(): string {
    return this.value
  }
}

export abstract class Step<T extends Answer> extends Entity {
  constructor(
    public readonly text: string,
    public readonly answer: T,
    id?: string
  ) {
    super(id)
  }

  abstract get type(): string
  abstract clone(): Step<T>

  setAnswer(answer: T): void {
    this.answer.setValue(answer)
  }
}

export class TextAnswerStep extends Step<TextAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "TextAnswerStep"

  constructor(
    text: string,
    answer: TextAnswer = new TextAnswer(),
    id?: string
  ) {
    super(text, answer, id)
  }

  get type(): string {
    return TextAnswerStep.TYPE
  }

  clone(): Step<TextAnswer> {
    return new TextAnswerStep(this.text, new TextAnswer(this.answer.value))
  }
}
