import { v4 as uuid } from "uuid"

export enum StepType {
  None = "NONE",
  Text = "TEXT",
}

export class Step<T extends StepType = StepType.None> {
  uuid: string
  text: string
  type?: StepType

  constructor(text: string, type?: T) {
    this.text = text
    this.type = type
    this.uuid = uuid()
  }
}

export class TextStep extends Step<StepType.Text> {
  constructor(text: string) {
    super(text, StepType.Text)
  }
}
