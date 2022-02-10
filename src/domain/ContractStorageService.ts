import Contract from "./Contract"
import LoadEntityFromStorage from "./LoadEntityFromStorage"
import SaveEntityToStorage from "./SaveEntityToStorage"
import type Storage from "./Storage"

export default class ContractStorageService
  implements
    LoadEntityFromStorage<Contract, File>,
    SaveEntityToStorage<Contract>
{
  constructor(private readonly storage: Storage<Contract, File>) {}

  public async load(content: File) {
    return this.storage.load(content)
  }

  public async save(contract: Contract) {
    return this.storage.save(contract)
  }
}
