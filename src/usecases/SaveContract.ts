import Contract from "../domain/Contract"

export default interface ContractSaver {
  save: (contract: Contract) => Promise<void>
}
