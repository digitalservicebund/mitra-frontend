import LoadContract from "../domain/LoadContract"
import { loadFile } from "./LoadFile"
import { createContract } from "./JSONMapper"

const loader: LoadContract<File> = {
  load: async (file: File) => {
    const result = await loadFile(file)
    return createContract(JSON.parse(result as string))
  },
}

export default loader
