import Playbook from "./Playbook"

export default interface PlaybookRepository {
  find: (id: string) => Playbook
}
