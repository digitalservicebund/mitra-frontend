import ContractLoader from "../usecases/LoadContract"
import { loadFile } from "./LoadFile"
import { createContract } from "./JsonAdapter"

const fileContractLoader: ContractLoader<File> = {
  load: async (file: File) => {
    const result = await loadFile(file)
    const jsonContract = JSON.parse(result as string)
    return createContract(jsonContract)
  },
}

export default fileContractLoader
