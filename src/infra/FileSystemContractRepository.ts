import Contract from "../domain/Contract"
import ContractRepository from "../domain/ContractRepository"
import Playbook from "../domain/Playbook"

const repository: ContractRepository = {
  load() {
    // noop
    return new Contract(new Playbook())
  },
  save(contract: Contract) {
    console.log(JSON.stringify(contract))
  },
}

export default repository
