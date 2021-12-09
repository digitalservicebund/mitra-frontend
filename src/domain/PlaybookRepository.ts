import Playbook from "./Playbook"

export default interface PlaybookRepository {
  load: (id: string) => Playbook
  save: (playbook: Playbook) => void
}
