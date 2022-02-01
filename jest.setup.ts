import "@testing-library/jest-dom"
import { config } from "@vue/test-utils"
import Contract from "./src/domain/Contract"
import ContractRepository from "./src/domain/ContractRepository"
import ContractStorageService from "./src/domain/ContractStorageService"
import Module from "./src/domain/Module"
import Playbook from "./src/domain/Playbook"
import PlaybookRepository from "./src/domain/PlaybookRepository"
import PlaybookStorageService from "./src/domain/PlaybookStorageService"
import { TextAnswerStep } from "./src/domain/Step"

config.global.directives = {
  focus() {
    /* stub */
  },
}

// Set up tests environment to use test repositories
let savedPlaybook: Playbook = new Playbook("test-playbook", [
  new Module("test-module", [new TextAnswerStep("test-step")]),
])

savedPlaybook.findModuleById = () => new Module("test-module")

const playbookTestRepository: PlaybookRepository = {
  findById() {
    return savedPlaybook
  },
  save(playbook) {
    savedPlaybook = playbook
    return
  },
}

let savedContract: Contract = Contract.fromPlaybook(savedPlaybook)
const contractTestRepository: ContractRepository = {
  findById() {
    return savedContract
  },
  save(contract) {
    savedContract = contract
    return
  },
}

const playbookTestStorageService: PlaybookStorageService =
  new PlaybookStorageService({ load: jest.fn(), save: jest.fn() })
jest.spyOn(playbookTestStorageService, "load")
jest.spyOn(playbookTestStorageService, "save")

const contractTestStorageService: ContractStorageService =
  new ContractStorageService({ load: jest.fn(), save: jest.fn() })
jest.spyOn(contractTestStorageService, "load")
jest.spyOn(contractTestStorageService, "save")

jest.mock("./src/provide", () => {
  return {
    makePlaybookRepository: jest.fn(() => playbookTestRepository),
    makeContractRepository: jest.fn(() => contractTestRepository),
    makePlaybookStorageService: jest.fn(() => playbookTestStorageService),
    makeContractStorageService: jest.fn(() => contractTestStorageService),
  }
})
