import Contract from "./Contract"

export default interface LoadContract<T> {
  load: (source: T) => Promise<Contract>
}
