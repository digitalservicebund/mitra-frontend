import Playbook from "./Playbook"

export default class Contract {
  name: string
  playbook: Playbook

  constructor(playbook: Playbook) {
    this.name = ""
    this.playbook = playbook
  }

  static fromPlaybook(playbook: Playbook): Contract {
    return new Contract(playbook)
  }

  get getModules() {
    return this.playbook.modules
  }
}
