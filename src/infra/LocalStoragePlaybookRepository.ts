import playbook from "../data/evb-it-cloud-playbook.json"
import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"
import { createPlaybook, PlaybookDTO } from "./JSONMapper"

const repository: PlaybookRepository = {
  findById(playbookId: string) {
    const serializedPlaybook: string | null = localStorage.getItem(playbookId)
    if (serializedPlaybook === null) {
      throw new Error("Playbook not found")
    }
    return createPlaybook(JSON.parse(serializedPlaybook))
  },

  save(playbook: Playbook) {
    localStorage.setItem(playbook.id, JSON.stringify({ playbook }))
  },
}

const cloudContractPlaybook = createPlaybook(playbook as PlaybookDTO)
repository.save(cloudContractPlaybook)

export default repository
