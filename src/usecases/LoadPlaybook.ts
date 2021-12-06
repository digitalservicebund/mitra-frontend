import Playbook from "../domain/Playbook"

export default interface PlaybookLoader<T> {
  load: (source: T) => Promise<Playbook>
}
