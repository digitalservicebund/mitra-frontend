import Playbook from "../domain/Playbook"
import Storage from "../domain/Storage"
import { createPlaybook } from "./JSONMapper"
import { loadFile } from "./LoadFile"

const storage: Storage<Playbook, File> = {
  async load(file: File) {
    const result = await loadFile(file)
    return createPlaybook(JSON.parse(result as string))
  },

  async save() {
    return Promise.reject("Not implemented")
  },
}

export default storage
