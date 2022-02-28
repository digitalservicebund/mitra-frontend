import { playbook } from "../data/evb-it-cloud-playbook.json"
import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"
import { createPlaybook, PlaybookDTO } from "./JSONMapper"

const data = new Map<string, Playbook>()

const cloudContractPlaybook = createPlaybook(playbook as PlaybookDTO)
data.set(cloudContractPlaybook.id, cloudContractPlaybook)

const repository: PlaybookRepository = {
  findById(id: string) {
    const playbook = data.get(id)
    if (typeof playbook === "undefined") {
      throw new Error("Contract not found")
    }
    return playbook
  },
}

export default repository
