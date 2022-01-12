import Entity from "./Entity"

type Answerable = string | number
type Choice = { text: string; path: Step<Answer>[] }

const computePathWithChoices = (
  step: Step<Answer>
): readonly Step<Answer>[] => {
  const path: Step<Answer>[] = [step]

  const { value, choices } = step.answer as {
    choices?: Step<Answer>[]
    value: number
  }
  if (choices && choices[value] !== undefined) {
    for (const stepInPath of (step.answer as SingleChoiceAnswer).choices[value]
      .path) {
      path.push(...computePathWithChoices(stepInPath))
    }
  }

  return Object.freeze(path)
}
export abstract class Answer<T = Answerable> extends Entity {
  constructor(public value: T) {
    super()
    this.value = value
  }

  setValue(answer: T): void {
    this.value = answer
  }

  abstract toString(): string
}

export class TextAnswer extends Answer<string> {
  constructor(value = "") {
    super(value)
  }

  toString(): string {
    return `${this.value}`
  }
}

export class SingleChoiceAnswer extends Answer<number> {
  constructor(public readonly choices: readonly Choice[], value = -1) {
    super(value)
  }

  toString(): string {
    return `${this.choices[this.value]?.text || ""}`
  }
}

export abstract class Step<T extends Answer> extends Entity {
  constructor(
    public readonly text: string,
    public readonly answer: T,
    id?: string
  ) {
    super(id)

    // Ensure our getters are enumerable so that JSON.stringify,
    // Object.keys etc. picks them up!
    for (const property of ["type"]) {
      const descriptor = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(this),
        property
      )
      Object.defineProperty(
        this,
        property,
        Object.assign(descriptor, {
          enumerable: true,
        })
      )
    }
  }

  abstract get type(): string
  abstract clone(): Step<T>

  get path(): readonly Step<Answer>[] {
    return Object.freeze([this])
  }

  print(): string {
    return this.answer.toString()
  }
}

export class TextAnswerStep extends Step<TextAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "TextAnswerStep"

  constructor(
    text: string,
    answer: TextAnswer = new TextAnswer(),
    public readonly produce: string = "${answer}",
    id?: string
  ) {
    super(text, answer, id)
  }

  get type(): string {
    return TextAnswerStep.TYPE
  }

  print() {
    if (!this.answer.value) {
      return ""
    }
    return this.produce.replaceAll("${answer}", this.answer.value.toString())
  }

  clone(): TextAnswerStep {
    return new TextAnswerStep(
      this.text,
      new TextAnswer(this.answer.value),
      this.produce
    )
  }
}

export class SingleChoiceAnswerStep extends Step<SingleChoiceAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "SingleChoiceAnswerStep"

  constructor(
    text: string,
    answer: SingleChoiceAnswer = new SingleChoiceAnswer([]),
    id?: string
  ) {
    super(text, answer, id)
  }

  get type(): string {
    return SingleChoiceAnswerStep.TYPE
  }

  get path(): readonly Step<Answer>[] {
    return computePathWithChoices(this)
  }

  get choices(): readonly Choice[] {
    return this.answer.choices
  }

  clone(): SingleChoiceAnswerStep {
    return new SingleChoiceAnswerStep(
      this.text,
      new SingleChoiceAnswer(this.answer.choices, this.answer.value)
    )
  }
}
