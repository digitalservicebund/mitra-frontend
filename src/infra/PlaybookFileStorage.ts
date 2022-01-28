import Playbook from "../domain/Playbook"
import Storage from "../domain/Storage"
import { createPlaybook } from "./JSONMapper"
import { loadFile } from "./LoadFile"

const storage: Storage<Playbook, File> = {
  async load(file: File) {
    const object = JSON.parse((await loadFile(file)) as string)
    return createPlaybook(object).updateMetadata({
      createdAt: new Date(object.createdAt),
      savedAt: new Date(file.lastModified),
    })
  },

  async save() {
    return Promise.reject("Not implemented")
  },
}

export default storage
