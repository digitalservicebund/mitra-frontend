import PlaybookLoader from "../usecases/LoadPlaybook"
import { loadFile } from "./LoadFile"
import { createPlaybook } from "./JsonAdapter"

const filePlaybookLoader: PlaybookLoader<File> = {
  load: async (file: File) => {
    const result = await loadFile(file)
    const jsonPlaybook = JSON.parse(result as string).playbook
    return createPlaybook(jsonPlaybook)
  },
}

export default filePlaybookLoader
