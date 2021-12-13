import Contract from "../domain/Contract"
import ContractRepository from "../domain/ContractRepository"

const data = new Map<string, Contract>()

const repository: ContractRepository = {
  findById(id: string) {
    return data.get(id)
  },

  save(contract: Contract) {
    data.set(contract.id, contract)
  },
}

export default repository
