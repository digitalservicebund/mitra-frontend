import Playbook from "./Playbook"
import LoadPlaybook from "./LoadPlaybook"
import Persistence from "./Persistence"

// Domain service
// - implements Persistence == incoming port depended on by driving adapter (vue component)
export default class PlaybookPersistenceService
  implements Persistence<Playbook>
{
  constructor(private readonly fileLoad: LoadPlaybook<File>) {}

  public async load(content: Blob) {
    return this.fileLoad.load(content as File)
  }
}
