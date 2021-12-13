import Contract from "./Contract"

export default interface ContractRepository {
  findById: (id: string) => Contract
  save: (contract: Contract) => void
}
