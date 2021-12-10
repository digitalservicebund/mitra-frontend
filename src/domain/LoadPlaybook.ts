import Playbook from "./Playbook"

export default interface LoadPlaybook<T> {
  load: (source: T) => Promise<Playbook>
}
