import { v4 as uuid } from "uuid"

export enum StepType {
  None = "NONE",
  Text = "TEXT",
}

export default class Step {
  uuid: string
  text: string
  type?: StepType

  constructor(text: string, type: StepType = StepType.None) {
    this.text = text
    this.type = type
    this.uuid = uuid()
  }
}
