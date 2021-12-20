import "@testing-library/jest-dom"
import { config } from "@vue/test-utils"
import Playbook from "./src/domain/Playbook"
import PlaybookRepository from "./src/domain/PlaybookRepository"
import Module from "./src/domain/Module"
import { TextAnswerStep } from "./src/domain/Step"
import PlaybookStorageService from "./src/domain/PlaybookStorageService"
import ContractStorageService from "./src/domain/ContractStorageService"

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

const playbookTestStorageService: PlaybookStorageService =
  new PlaybookStorageService({ load: jest.fn(), save: jest.fn() })
jest.spyOn(playbookTestStorageService, "load")

const contractTestStorageService: ContractStorageService =
  new ContractStorageService({ load: jest.fn(), save: jest.fn() })
jest.spyOn(contractTestStorageService, "load")
jest.spyOn(contractTestStorageService, "save")

jest.mock("./src/provide", () => {
  return {
    makePlaybookRepository: jest.fn(() => playbookTestRepository),
    makePlaybookStorageService: jest.fn(() => playbookTestStorageService),
    makeContractStorageService: jest.fn(() => contractTestStorageService),
  }
})
