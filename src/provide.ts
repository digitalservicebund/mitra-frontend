import playbookRepository from "./infra/InMemoryPlaybookRepository"
import contractFileStorage from "./infra/ContractFileStorage"
import ContractStorageService from "./domain/ContractStorageService"
import playbookFileStorage from "./infra/PlaybookFileStorage"
import PlaybookStorageService from "./domain/PlaybookStorageService"

export const makePlaybookRepository = () => playbookRepository

export const makeContractStorageService = () =>
  new ContractStorageService(contractFileStorage)

export const makePlaybookStorageService = () =>
  new PlaybookStorageService(playbookFileStorage)
