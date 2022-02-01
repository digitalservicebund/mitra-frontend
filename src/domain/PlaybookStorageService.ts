import LoadEntityFromStorage from "./LoadEntityFromStorage"
import Playbook from "./Playbook"
import type Storage from "./Storage"

export default class PlaybookStorageService
  implements LoadEntityFromStorage<Playbook, File>
{
  constructor(private readonly storage: Storage<Playbook, File>) {}

  public async load(content: File) {
    return this.storage.load(content)
  }

  public async save(playbook: Playbook) {
    return this.storage.save(playbook)
  }
}
