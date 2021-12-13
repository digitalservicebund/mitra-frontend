import Contract from "./Contract"
import LoadContract from "./LoadContract"
import SaveContract from "./SaveContract"
import Persistence from "./Persistence"

// Domain service
// - implements Persistence == incoming port depended on by driving adapter (vue component)
// - depends on SaveContract == outgoing port implemented by driven adapter
export default class ContractPersistenceService
  implements Persistence<Contract>
{
  constructor(
    private readonly fileLoad: LoadContract<File>,
    private readonly fileSave: SaveContract
  ) {}

  public async load(content: Blob) {
    return this.fileLoad.load(content as File)
  }

  public async save(contract: Contract) {
    return this.fileSave.save(contract)
  }
}
