import ContractStorageService from "./domain/ContractStorageService"
import PlaybookStorageService from "./domain/PlaybookStorageService"
import contractFileStorage from "./infra/ContractFileStorage"
import contractRepository from "./infra/LocalStorageContractRepository"
import playbookRepository from "./infra/LocalStoragePlaybookRepository"
import playbookFileStorage from "./infra/PlaybookFileStorage"

export const makeContractRepository = () => contractRepository

export const makePlaybookRepository = () => playbookRepository

export const makeContractStorageService = () =>
  new ContractStorageService(contractFileStorage)

export const makePlaybookStorageService = () =>
  new PlaybookStorageService(playbookFileStorage)
