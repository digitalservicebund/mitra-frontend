import Playbook from "./Playbook"

export default interface PlaybookRepository {
  load: () => Playbook
  save: (playbook: Playbook) => void
}
