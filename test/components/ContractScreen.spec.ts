import { mount, shallowMount } from "@vue/test-utils"
import ContractScreen from "../../src/components/ContractScreen.vue"
import Contract from "../../src/domain/Contract"
import ContractRepository from "../../src/domain/ContractRepository"
import PlaybookRepository from "../../src/domain/PlaybookRepository"

const playbookTestRepository: PlaybookRepository = {
  load() {
    return {
      modules: [],
      getModules() {
        return this.modules
      },
    }
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
  save(contract: Contract) {
    savedContract = contract
    return
  },
}

// Set up tests to use test repositories
jest.mock("../../src/provide", () => {
  return {
    makePlaybookRepository: jest.fn(() => playbookTestRepository),
    makeContractRepository: jest.fn(() => contractTestRepository),
  }
})

describe("ContractScreen", () => {
  it("updates contract name when entered", () => {
    const wrapper = shallowMount(ContractScreen)
    const vm: unknown = wrapper.vm
    const instance = vm as {
      contract: Contract
      titleInput: string
      updateTitle: () => void
    }

    expect(instance.contract.name).toBe("")

    // Simulate text input
    instance.titleInput = "Neuer Vertrag"
    instance.updateTitle()

    expect(instance.contract.name).toBe("Neuer Vertrag")
  })

  it("allows to save contract as work in progress", async () => {
    const wrapper = mount(ContractScreen, {
      global: {
        stubs: {
          AppHeader: true,
          Dialog: true,
          RouterLink: true,
        },
      },
    })
    const vm: unknown = wrapper.vm
    const instance = vm as {
      titleInput: string
      updateTitle: () => void
    }

    // Simulate text input
    instance.titleInput = "Neuer Vertrag"
    instance.updateTitle()

    await wrapper
      .findAll("button")
      .filter((button) => button.text() === "Speichern")
      .forEach((button) => button.trigger("click"))

    expect(contractTestRepository.load().name).toBe("Neuer Vertrag")
  })
})
