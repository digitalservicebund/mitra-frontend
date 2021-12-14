import Contract from "./Contract"
import Storage from "./Storage"

export default class ContractStorageService implements Storage<Contract, File> {
  constructor(private readonly storage: Storage<Contract, File>) {}

  public async load(content: File) {
    return this.storage.load(content)
  }

  public async save(contract: Contract) {
    return this.storage.save(contract)
  }
}
