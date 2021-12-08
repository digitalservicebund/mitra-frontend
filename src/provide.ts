import PlaybookRepository from "./domain/PlaybookRepository"
import playbookRepository from "./infra/InMemoryPlaybookRepository"
import ContractRepository from "./domain/ContractRepository"
import contractRepository from "./infra/FileSystemContractRepository"
import PlaybookLoader from "./usecases/LoadPlaybook"
import filePlaybookLoader from "./infra/FileSystemPlaybookLoader"
import store, { ContractStore } from "./infra/ContractStore"
import fileContractLoader from "./infra/FileSystemContractLoader"
import ContractLoader from "./usecases/LoadContract"

export const makePlaybookRepository: () => PlaybookRepository = () => {
  return playbookRepository
}

export const makeContractRepository: () => ContractRepository = () => {
  return contractRepository
}

export const makeFileSystemPlaybookLoader: () => PlaybookLoader<File> = () => {
  return filePlaybookLoader
}

export const makeFileSystemContractLoader: () => ContractLoader<File> = () => {
  return fileContractLoader
}

export const makeContractStore: () => ContractStore = () => {
  return store
}
