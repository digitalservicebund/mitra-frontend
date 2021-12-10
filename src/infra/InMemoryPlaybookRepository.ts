import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"
import { playbook } from "../data/evb-it-cloud-playbook.json"
import { createPlaybook } from "./JSONMapper"

const data = new Map<string, Playbook>()

const cloudContractPlaybook = createPlaybook(playbook as Playbook)
data.set(cloudContractPlaybook.id, cloudContractPlaybook)

const repository: PlaybookRepository = {
  load(id: string) {
    return data.get(id) || new Playbook()
  },
  save(playbook: Playbook) {
    data.set(playbook.id, playbook)
  },
}

export default repository
