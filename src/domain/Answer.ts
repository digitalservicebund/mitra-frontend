import { Step } from "./Step"
import ValueObject from "./ValueObject"

type Answerable = string | number | MultipleChoice | Row[]

export type MultipleChoice = { selected: number[]; text?: [...string[]] }
export class Choice {
  constructor(
    public readonly text: string,
    public readonly path: Step<Answer>[] = []
  ) {}

  clone() {
    return new Choice(
      this.text,
      this.path.map((step) => step.clone())
    )
  }
}

export abstract class Answer<T = Answerable> extends ValueObject {
  constructor(public value: T) {
    super()
    this.value = value
  }

  setValue(answer: T): void {
    this.value = answer
  }

  abstract clone(): Answer<T>
  abstract toString(): string
}

export class TextAnswer extends Answer<string> {
  constructor(value = "") {
    super(value)
  }

  clone(): Answer<string> {
    return new TextAnswer(this.value)
  }

  toString(): string {
    return this.value
  }
}

export class RichTextAnswer extends Answer<string> {
  constructor(value = "") {
    super(value)
  }

  clone(): Answer<string> {
    return new TextAnswer(this.value)
  }

  toString(): string {
    return this.value
  }
}

export class SingleChoiceAnswer extends Answer<number> {
  constructor(public readonly choices: readonly Choice[], value = -1) {
    super(value)
  }

  get selected(): Choice | undefined {
    return this.choices[this.value]
  }

  clone(): Answer<number> {
    return new SingleChoiceAnswer(
      this.choices.map((choice) => choice.clone()),
      this.value
    )
  }

  toString(): string {
    return `${this.selected?.text || ""}`
  }
}

export class MultipleChoiceAnswer extends Answer<MultipleChoice> {
  constructor(
    public readonly choices: readonly Choice[],
    readonly value: MultipleChoice = { selected: [] }
  ) {
    super(value)
  }

  get selected(): readonly Choice[] {
    return this.value.selected
      .sort()
      .reduce(
        (memo: Choice[], index: number) => [...memo, this.choices[index]],
        []
      )
  }

  clone(): Answer<MultipleChoice> {
    return new MultipleChoiceAnswer(
      this.choices.map((choice) => choice.clone()),
      { ...this.value } // TODO: clone array again!
    )
  }

  toString(): string {
    // TODO: here we must replace placeholders in `choice.text` with their values!
    // => choice.text.replace(/\$\{[^}]+}/, ...)
    return `${this.selected.map((choice) => choice.text).join(", ")}`
  }
}

export type Row = { [key: string]: string }

export class SheetAnswer extends Answer<Row[]> {
  constructor(value: Row[]) {
    super(value)
  }

  clone(): Answer<Row[]> {
    return new SheetAnswer(this.value)
  }

  toString(): string {
    return JSON.stringify(this.value)
  }
}
