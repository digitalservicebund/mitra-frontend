import Contract from "../domain/Contract"
import ContractRepository from "../domain/ContractRepository"
import { createContract } from "./JSONMapper"

const repository: ContractRepository = {
  findById(contractId: string) {
    const serializedContract: string | null = localStorage.getItem(contractId)
    if (serializedContract === null) {
      throw new Error("Contract not found")
    }
    return createContract(JSON.parse(serializedContract))
  },

  save(contract: Contract) {
    localStorage.setItem(contract.id, JSON.stringify({ contract }))
  },
}

export default repository
