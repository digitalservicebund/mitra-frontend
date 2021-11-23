interface Step {
  text: string
}
interface Module {
  text: string
  steps: Step[]
}
export default interface Playbook {
  modules: Module[]
}
