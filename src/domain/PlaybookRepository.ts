import Playbook from "./Playbook"

export default interface PlaybookRepository {
  findById: (id: string) => Playbook | undefined
  save: (playbook: Playbook) => void
}
