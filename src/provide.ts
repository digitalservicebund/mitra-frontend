import PlaybookRepository from "./domain/PlaybookRepository"
import playbookRepository from "./infra/InMemoryPlaybookRepository"
import ContractRepository from "./domain/ContractRepository"
import contractRepository from "./infra/FileSystemContractRepository"

export const makePlaybookRepository: () => PlaybookRepository = () => {
  return playbookRepository
}

export const makeContractRepository: () => ContractRepository = () => {
  return contractRepository
}
