interface Step {
  text: string
}
interface Module {
  text: string
  steps: Step[]
}
export default interface Playbook {
  id: string
  name: string
  modules: Module[]
}
