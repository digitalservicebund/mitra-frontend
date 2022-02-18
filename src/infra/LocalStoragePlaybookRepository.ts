import { playbook } from "../data/evb-it-cloud-playbook.json"
import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"
import { createPlaybook, PlaybookDTO } from "./JSONMapper"

const repository: PlaybookRepository = {
  findById(playbookId: string) {
    const serializedPlaybook: string | null = localStorage.getItem(playbookId)
    if (serializedPlaybook === null) {
      throw new Error("Playbook not found")
    }
    const { playbook } = JSON.parse(serializedPlaybook, (key, value) =>
      ["createdAt", "savedAt"].includes(key) ? new Date(value) : value
    )
    return createPlaybook(playbook)
  },

  save(playbook: Playbook) {
    localStorage.setItem(playbook.id, JSON.stringify({ playbook }))
  },
}

const cloudContractPlaybook = createPlaybook(
  playbook as PlaybookDTO
).updateMetadata({ createdAt: new Date() })
repository.save(cloudContractPlaybook)

export default repository
