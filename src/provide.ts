import PlaybookRepository from "./domain/PlaybookRepository"
import playbookRepository from "./infra/InMemoryPlaybookRepository"
import ContractRepository from "./domain/ContractRepository"
import contractRepository from "./infra/InMemoryContractRepository"
import PlaybookLoader from "./usecases/LoadPlaybook"
import filePlaybookLoader from "./infra/FileSystemPlaybookLoader"
import ContractLoader from "./usecases/LoadContract"
import fileContractLoader from "./infra/FileSystemContractLoader"
import ContractSaver from "./usecases/SaveContract"
import fileContractSaver from "./infra/FileSystemContractSaver"

export const makePlaybookRepository: () => PlaybookRepository = () =>
  playbookRepository

export const makeContractRepository: () => ContractRepository = () =>
  contractRepository

export const makeFileSystemPlaybookLoader: () => PlaybookLoader<File> = () =>
  filePlaybookLoader

export const makeFileSystemContractLoader: () => ContractLoader<File> = () =>
  fileContractLoader

export const makeFileSystemContractSaver: () => ContractSaver = () =>
  fileContractSaver
