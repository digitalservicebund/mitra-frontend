import ContractStorageService from "./domain/ContractStorageService"
import PlaybookStorageService from "./domain/PlaybookStorageService"
import contractFileStorage from "./infra/ContractFileStorage"
import playbookRepository from "./infra/InMemoryPlaybookRepository"
import contractRepository from "./infra/LocalStorageContractRepository"
import playbookFileStorage from "./infra/PlaybookFileStorage"

export const makeContractRepository = () => contractRepository

export const makePlaybookRepository = () => playbookRepository

export const makeContractStorageService = () =>
  new ContractStorageService(contractFileStorage)

export const makePlaybookStorageService = () =>
  new PlaybookStorageService(playbookFileStorage)
