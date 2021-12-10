import Contract from "./Contract"

export default interface SaveContract {
  save: (contract: Contract) => Promise<void>
}
