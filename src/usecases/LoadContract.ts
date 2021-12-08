import Contract from "../domain/Contract"

export default interface ContractLoader<T> {
  load: (source: T) => Promise<Contract>
}
