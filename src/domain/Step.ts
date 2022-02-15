import {
  Answer,
  TextAnswer,
  RichTextAnswer,
  SingleChoiceAnswer,
  MultipleChoiceAnswer,
  SheetAnswer,
  Choice,
} from "./Answer"
import Entity from "./Entity"

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

export abstract class Step<T extends Answer> extends Entity {
  constructor(
    public prompt: string,
    public readonly answer: T,
    public description?: string,
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
  static readonly LABEL = "kurzer Text"
  public readonly produce: string

  constructor(
    prompt: string,
    {
      answer = new TextAnswer(),
      produce = "${answer}",
      description,
      id,
    }: {
      answer?: TextAnswer
      produce?: string
      description?: string
      id?: string
    } = {}
  ) {
    super(prompt, answer, description, id)
    this.produce = produce
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
    return new TextAnswerStep(this.prompt, {
      answer: new TextAnswer(this.answer.value),
      produce: this.produce,
      description: this.description,
    })
  }
}

export class RichTextAnswerStep extends Step<RichTextAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "RichTextAnswerStep"
  static readonly LABEL = "langer Text"
  public readonly produce: string

  constructor(
    prompt: string,
    {
      answer = new RichTextAnswer(),
      produce = "${answer}",
      description,
      id,
    }: {
      answer?: RichTextAnswer
      produce?: string
      description?: string
      id?: string
    } = {}
  ) {
    super(prompt, answer, description, id)
    this.produce = produce
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
    return new RichTextAnswerStep(this.prompt, {
      answer: new RichTextAnswer(this.answer.value),
      produce: this.produce,
      description: this.description,
    })
  }
}

export class SingleChoiceAnswerStep extends Step<SingleChoiceAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "SingleChoiceAnswerStep"

  constructor(
    prompt: string,
    {
      answer = new SingleChoiceAnswer([]),
      description,
      id,
    }: {
      answer?: SingleChoiceAnswer
      description?: string
      id?: string
    } = {}
  ) {
    super(prompt, answer, description, id)
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
    return new SingleChoiceAnswerStep(this.prompt, {
      answer: new SingleChoiceAnswer(
        this.choices.map((choice) => choice.clone()),
        this.answer.value
      ),
      description: this.description,
    })
  }
}

export class MultipleChoiceAnswerStep extends Step<MultipleChoiceAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "MultipleChoiceAnswerStep"

  constructor(
    prompt: string,
    {
      answer = new MultipleChoiceAnswer([]),
      description,
      id,
    }: {
      answer?: MultipleChoiceAnswer
      description?: string
      id?: string
    } = {}
  ) {
    super(prompt, answer, description, id)
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
    return new MultipleChoiceAnswerStep(this.prompt, {
      answer: new MultipleChoiceAnswer(
        this.choices.map((choice) => choice.clone()),
        this.answer.value
      ),
      description: this.description,
    })
  }
}

export class SheetAnswerStep extends Step<SheetAnswer> {
  // We need to capture the type manually, as at runtime it's not available,
  // and because Vue uses proxies, thus we can't compare constructors...
  static readonly TYPE = "SheetAnswerStep"
  public readonly produce: string

  constructor(
    prompt: string,
    answer: SheetAnswer,
    {
      produce = "${answer}",
      description,
      id,
    }: {
      produce?: string
      description?: string
      id?: string
    } = {}
  ) {
    super(prompt, answer, description, id)
    this.produce = produce
  }

  get type(): string {
    return SheetAnswerStep.TYPE
  }

  clone(): SheetAnswerStep {
    return new SheetAnswerStep(
      this.prompt,
      new SheetAnswer(this.answer.value),
      {
        produce: this.produce,
        description: this.description,
      }
    )
  }

  updateCell(rowIndex: number, cell: string, value: string) {
    this.answer.value[rowIndex][cell] = value
  }
}
