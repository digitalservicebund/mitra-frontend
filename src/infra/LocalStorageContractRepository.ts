import Contract from "../domain/Contract"
import ContractRepository from "../domain/ContractRepository"
import { createContract } from "./JSONMapper"

const repository: ContractRepository = {
  findById(contractId: string) {
    const serializedContract: string | null = localStorage.getItem(contractId)
    if (serializedContract === null) {
      throw new Error("Contract not found")
    }
    const object = JSON.parse(serializedContract, (key, value) =>
      ["createdAt", "savedAt"].includes(key) ? new Date(value) : value
    )
    const { createdAt, savedAt } = object
    return createContract(object).updateMetadata({ createdAt, savedAt })
  },

  save(contract: Contract) {
    localStorage.setItem(
      contract.id,
      JSON.stringify({ contract, ...contract.metadata })
    )
  },
}

export default repository
