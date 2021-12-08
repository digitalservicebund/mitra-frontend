import Contract from "../domain/Contract"

const contracts = new Map<string, Contract>()

export interface ContractStore {
  load(id: string): Contract
  save(id: string, contract: Contract): void
}

const store: ContractStore = {
  load(id: string) {
    return contracts.get(id) || new Contract("", [])
  },

  save(id: string, contract: Contract) {
    contracts.set(id, contract)
  },
}

export default store
