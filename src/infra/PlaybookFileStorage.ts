import Playbook from "../domain/Playbook"
import Storage from "../domain/Storage"
import { loadFile } from "./LoadFile"
import { createPlaybook } from "./JSONMapper"

const storage: Storage<Playbook, File> = {
  async load(file: File) {
    const result = await loadFile(file)
    return createPlaybook(JSON.parse(result as string).playbook)
  },

  async save() {
    return Promise.reject("Not implemented")
  },
}

export default storage
