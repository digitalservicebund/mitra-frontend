import "@testing-library/jest-dom"
import { config } from "@vue/test-utils"
import Contract from "./src/domain/Contract"
import ContractRepository from "./src/domain/ContractRepository"
import Playbook from "./src/domain/Playbook"
import PlaybookRepository from "./src/domain/PlaybookRepository"
import Module from "./src/domain/Module"
import { TextAnswerStep } from "./src/domain/Step"
import PlaybookPersistenceService from "./src/domain/PlaybookPersistenceService"
import ContractPersistenceService from "./src/domain/ContractPersistenceService"

config.global.directives = {
  focus() {
    /* stub */
  },
}

// Set up tests environment to use test repositories
let savedPlaybook: Playbook = new Playbook([
  new Module("test-module", [new TextAnswerStep("test-step")]),
])
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

const playbookTestPersistenceService: PlaybookPersistenceService =
  new PlaybookPersistenceService({ load: jest.fn() })
jest.spyOn(playbookTestPersistenceService, "load")

const contractTestPersistenceService: ContractPersistenceService =
  new ContractPersistenceService({ load: jest.fn() }, { save: jest.fn() })
jest.spyOn(contractTestPersistenceService, "load")
jest.spyOn(contractTestPersistenceService, "save")

jest.mock("./src/provide", () => {
  return {
    makePlaybookRepository: jest.fn(() => playbookTestRepository),
    makeContractRepository: jest.fn(() => contractTestRepository),
    makePlaybookPersistenceService: jest.fn(
      () => playbookTestPersistenceService
    ),
    makeContractPersistenceService: jest.fn(
      () => contractTestPersistenceService
    ),
  }
})
