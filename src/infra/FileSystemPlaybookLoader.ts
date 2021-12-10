import LoadPlaybook from "../domain/LoadPlaybook"
import { loadFile } from "./LoadFile"
import { createPlaybook } from "./JSONMapper"

const loader: LoadPlaybook<File> = {
  load: async (file: File) => {
    const result = await loadFile(file)
    return createPlaybook(JSON.parse(result as string).playbook)
  },
}

export default loader
