export enum StepType {
  Text = "TEXT",
}

export default interface Step {
  text: string
  type?: StepType
}
