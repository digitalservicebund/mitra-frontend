import Playbook from "./Playbook"
import Storage from "./Storage"

export default class PlaybookStorageService implements Storage<Playbook, File> {
  constructor(private readonly storage: Storage<Playbook, File>) {}

  public async load(content: File) {
    return this.storage.load(content)
  }

  public async save() {
    return Promise.reject("Not implemented")
  }
}
