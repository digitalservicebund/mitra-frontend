import Playbook from "./Playbook"

export default class Contract {
  name: string
  playbook: Playbook

  constructor(name: string, playbook: Playbook) {
    this.name = name
    this.playbook = playbook
  }

  static fromPlaybook(playbook: Playbook): Contract {
    return new Contract(playbook.name, playbook)
  }
}
