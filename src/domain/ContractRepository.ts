import Contract from "./Contract"

export default interface ContractRepository {
  findById: (id: string) => Contract | undefined
  save: (contract: Contract) => void
}
