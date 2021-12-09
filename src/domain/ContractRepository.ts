import Contract from "./Contract"

export default interface ContractRepository {
  load: (id: string) => Contract
  save: (contract: Contract) => void
}
