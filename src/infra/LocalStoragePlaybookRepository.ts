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
    const object = JSON.parse(serializedPlaybook, (key, value) =>
      ["createdAt", "savedAt"].includes(key) ? new Date(value) : value
    )
    const { createdAt, savedAt } = object
    return createPlaybook(JSON.parse(serializedPlaybook)).updateMetadata({
      createdAt,
      savedAt,
    })
  },

  save(playbook: Playbook) {
    localStorage.setItem(
      playbook.id,
      JSON.stringify({ playbook, ...playbook.metadata })
    )
  },
}

const cloudContractPlaybook = createPlaybook(playbook as PlaybookDTO)
repository.save(cloudContractPlaybook)

export default repository
