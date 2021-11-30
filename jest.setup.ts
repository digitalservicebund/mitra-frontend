import "@testing-library/jest-dom"
import { config } from "@vue/test-utils"
import Contract from "./src/domain/Contract"
import ContractRepository from "./src/domain/ContractRepository"
import Module from "./src/domain/Module"
import Playbook from "./src/domain/Playbook"
import PlaybookRepository from "./src/domain/PlaybookRepository"
import { TextAnswerStep } from "./src/domain/Step"

config.global.directives = {
  focus() {
    /* stub */
  },
}

// Set up tests environment to use test repositories
const playbookTestRepository: PlaybookRepository = {
  load() {
    return new Playbook([
      new Module("test-module", [new TextAnswerStep("test-step")]),
    ])
  },
  save() {
    return
  },
}

let savedContract: Contract
const contractTestRepository: ContractRepository = {
  load() {
    return savedContract
  },
  async save(contract: Contract) {
    savedContract = contract
    return
  },
}

jest.mock("./src/provide", () => {
  return {
    makePlaybookRepository: jest.fn(() => playbookTestRepository),
    makeContractRepository: jest.fn(() => contractTestRepository),
  }
})
