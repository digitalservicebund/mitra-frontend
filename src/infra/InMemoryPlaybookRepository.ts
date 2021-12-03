import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"
import cloudContractPlaybook from "./CloudContractPlaybook"

let currentPlaybook: Playbook

const repository: PlaybookRepository = {
  load() {
    return currentPlaybook || cloudContractPlaybook
  },
  save(playbook: Playbook) {
    currentPlaybook = playbook
  },
}

export default repository
