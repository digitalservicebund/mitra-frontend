import "@testing-library/jest-dom"
import { config } from "@vue/test-utils"
import Contract from "./src/domain/Contract"
import ContractRepository from "./src/domain/ContractRepository"
import Playbook from "./src/domain/Playbook"
import PlaybookRepository from "./src/domain/PlaybookRepository"
import Module from "./src/domain/Module"
import { TextAnswerStep } from "./src/domain/Step"
import SaveContract from "./src/domain/SaveContract"

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

let savedContract: Contract = Contract.fromPlaybook(savedPlaybook) as Contract
const contractTestRepository: ContractRepository = {
  findById() {
    return savedContract
  },
  save(contract) {
    savedContract = contract
    return
  },
}

const saveContract: SaveContract = {
  save: jest.fn(),
}

jest.mock("./src/provide", () => {
  return {
    makePlaybookRepository: jest.fn(() => playbookTestRepository),
    makeContractRepository: jest.fn(() => contractTestRepository),
    makeSaveContract: jest.fn(() => saveContract),
  }
})
