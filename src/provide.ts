import contractRepository from "./infra/InMemoryContractRepository"
import playbookRepository from "./infra/InMemoryPlaybookRepository"
import loadContractFromFileSystem from "./infra/FileSystemContractLoader"
import saveContractToFileSystem from "./infra/FileSystemContractSaver"
import loadPlaybookFromFileSystem from "./infra/FileSystemPlaybookLoader"
import ContractPersistenceService from "./domain/ContractPersistenceService"
import PlaybookPersistenceService from "./domain/PlaybookPersistenceService"

export const makeContractRepository = () => contractRepository

export const makePlaybookRepository = () => playbookRepository

export const makeContractPersistenceService = () =>
  new ContractPersistenceService(
    loadContractFromFileSystem,
    saveContractToFileSystem
  )

export const makePlaybookPersistenceService = () =>
  new PlaybookPersistenceService(loadPlaybookFromFileSystem)
