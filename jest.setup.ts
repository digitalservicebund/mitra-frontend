import "@testing-library/jest-dom"
import { config } from "@vue/test-utils"
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

// Set up test environment to use test repository and storage
const playbookTestRepository: PlaybookRepository = {
  findById() {
    return new Playbook("test-playbook", [
      new Module("test-module", [new TextAnswerStep("test-step")]),
    ])
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
    makePlaybookStorageService: jest.fn(() => playbookTestStorageService),
    makeContractStorageService: jest.fn(() => contractTestStorageService),
  }
})
