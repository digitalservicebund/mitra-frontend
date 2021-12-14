import Contract from "../domain/Contract"
import ContractRepository from "../domain/ContractRepository"

const data = new Map<string, Contract>()

const repository: ContractRepository = {
  findById(id: string) {
    const contract = data.get(id)
    if (typeof contract === "undefined") {
      throw new Error("Contract not found")
    }
    return contract
  },

  save(contract: Contract) {
    data.set(contract.id, contract)
  },
}

export default repository
