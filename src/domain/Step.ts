export enum StepType {
  Text = "TEXT",
}

export interface Step {
  text: string
  type?: StepType
}
