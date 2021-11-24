export enum StepType {
  Text = "TEXT",
}

export interface Step {
  id: number
  text: string
  type?: StepType
  prev?: number
  next?: number
}
