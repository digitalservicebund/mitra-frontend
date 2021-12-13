import "@testing-library/jest-dom"
import { config } from "@vue/test-utils"
import Contract from "./src/domain/Contract"
import ContractRepository from "./src/domain/ContractRepository"
import Playbook from "./src/domain/Playbook"
import PlaybookRepository from "./src/domain/PlaybookRepository"
import Module from "./src/domain/Module"
import { TextAnswerStep } from "./src/domain/Step"

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

jest.mock("./src/provide", () => {
  return {
    makePlaybookRepository: jest.fn(() => playbookTestRepository),
    makeContractRepository: jest.fn(() => contractTestRepository),
  }
})
