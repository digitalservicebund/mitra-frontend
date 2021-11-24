interface Step {
  text: string
}
export interface Module {
  text: string
  steps: Step[]
}
export default interface Playbook {
  modules: Module[]
}
