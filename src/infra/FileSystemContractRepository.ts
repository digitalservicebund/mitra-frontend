import Contract from "../domain/Contract"
import ContractRepository from "../domain/ContractRepository"

const repository: ContractRepository = {
  load() {
    // noop
    return new Contract({ modules: [] })
  },
  save(contract: Contract) {
    console.log(JSON.stringify(contract))
  },
}

export default repository
