import Playbook from "./Playbook"

export default interface PlaybookRepository {
  findById: (id: string) => Playbook
  save: (playbook: Playbook) => void
}
