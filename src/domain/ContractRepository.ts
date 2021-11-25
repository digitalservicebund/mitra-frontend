import Contract from "./Contract"

export default interface ContractRepository {
  load: () => Contract
  save: (contract: Contract) => Promise<void>
}
