import Entity from "./Entity"
import ValueObject from "./ValueObject"

type Answerable = string | number | number[] | Row[]

const computePathWithChoices = (
  step: Step<Answer>
): readonly Step<Answer>[] => {
  const path: Step<Answer>[] = [step]

  // Take the selected choice(s) from either SingleChoiceAnswerStep or
  // MultipleChoiceAnswerStep. Other steps won't hold a `selected` property.
  const { selected } = step as {
    selected?: Choice | Choice[]
  }

  ;[selected ?? []]
    .flat()
    .flatMap((choice) => choice.path)
    .forEach((stepInPath) => path.push(...computePathWithChoices(stepInPath)))

  return Object.freeze(path)
}

export class Choice {
  constructor(
    public readonly text: string,
    public readonly path: Step<Answer>[]
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

  clone(): Answer<number> {
    return new SingleChoiceAnswer(
      this.choices.map((choice) => choice.clone()),
      this.value
    )
  }

  get selected(): Choice | undefined {
    return this.choices[this.value]
  }

  toString(): string {
    return `${this.selected?.text || ""}`
  }
}

export class MultipleChoiceAnswer extends Answer<number[]> {
  constructor(
    public readonly choices: readonly Choice[],
    readonly value: number[] = []
  ) {
    super(value)
  }

  clone(): Answer<number[]> {
    return new MultipleChoiceAnswer(
      this.choices.map((choice) => choice.clone()),
      this.value
    )
  }

  get selected(): readonly Choice[] {
    return this.value
      .sort()
      .reduce(
        (memo: Choice[], index: number) => [...memo, this.choices[index]],
        []
      )
  }

  toString(): string {
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
    return this.produce.replaceAll("${answer}", this.answer.value)
  }

  clone(): TextAnswerStep {
    return new TextAnswerStep(
      this.text,
      new TextAnswer(this.answer.value),
      this.produce
    )
  }
}

export class RichTextAnswerStep extends Step<RichTextAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "RichTextAnswerStep"

  constructor(
    text: string,
    answer: RichTextAnswer = new RichTextAnswer(),
    public readonly produce: string = "${answer}",
    id?: string
  ) {
    super(text, answer, id)
  }

  get type(): string {
    return RichTextAnswerStep.TYPE
  }

  print() {
    if (!this.answer.value) {
      return ""
    }
    return this.produce.replaceAll("${answer}", this.answer.value)
  }

  clone(): RichTextAnswerStep {
    return new RichTextAnswerStep(
      this.text,
      new RichTextAnswer(this.answer.value),
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

  get selected(): Choice | undefined {
    return this.answer.selected
  }

  clone(): SingleChoiceAnswerStep {
    return new SingleChoiceAnswerStep(
      this.text,
      new SingleChoiceAnswer(
        this.choices.map((choice) => choice.clone()),
        this.answer.value
      )
    )
  }
}

export class MultipleChoiceAnswerStep extends Step<MultipleChoiceAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "MultipleChoiceAnswerStep"

  constructor(
    text: string,
    answer: MultipleChoiceAnswer = new MultipleChoiceAnswer([]),
    id?: string
  ) {
    super(text, answer, id)
  }

  get type(): string {
    return MultipleChoiceAnswerStep.TYPE
  }

  get path(): readonly Step<Answer>[] {
    return computePathWithChoices(this)
  }

  get choices(): readonly Choice[] {
    return this.answer.choices
  }

  get selected(): readonly Choice[] {
    return this.answer.selected
  }

  clone(): MultipleChoiceAnswerStep {
    return new MultipleChoiceAnswerStep(
      this.text,
      new MultipleChoiceAnswer(
        this.choices.map((choice) => choice.clone()),
        this.answer.value
      )
    )
  }
}

export class SheetAnswerStep extends Step<SheetAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "SheetAnswerStep"

  constructor(
    text: string,
    answer: SheetAnswer,
    public readonly produce: string = "${answer}",
    id?: string
  ) {
    super(text, answer, id)
  }

  get type(): string {
    return SheetAnswerStep.TYPE
  }

  clone(): SheetAnswerStep {
    return new SheetAnswerStep(this.text, new SheetAnswer(this.answer.value))
  }
}
