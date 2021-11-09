interface Step {
  text: string
}
interface Section {
  text: string
  steps: Step[]
}
export default interface Playbook {
  id: string
  name: string
  sections: Section[]
}
