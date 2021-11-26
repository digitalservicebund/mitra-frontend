import { mount, shallowMount } from "@vue/test-utils"
import ContractScreen from "../../src/components/ContractScreen.vue"
import ContractSideMenu from "../../src/components/ContractSideMenu.vue"
import Contract from "../../src/domain/Contract"
import ContractRepository from "../../src/domain/ContractRepository"
import PlaybookRepository from "../../src/domain/PlaybookRepository"
import Playbook from "../../src/domain/Playbook"

const playbookTestRepository: PlaybookRepository = {
  load() {
    return new Playbook()
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

// Set up tests to use test repositories
jest.mock("../../src/provide", () => {
  return {
    makePlaybookRepository: jest.fn(() => playbookTestRepository),
    makeContractRepository: jest.fn(() => contractTestRepository),
  }
})

describe("ContractScreen", () => {
  it("updates contract title when entered", () => {
    const wrapper = shallowMount(ContractScreen)
    const vm: unknown = wrapper.vm
    const instance = vm as {
      contract: Contract
      titleInput: string
      updateTitle: () => void
    }

    expect(instance.contract.title).toBe("")

    // Simulate text input
    instance.titleInput = "Neuer Vertrag"
    instance.updateTitle()

    expect(instance.contract.title).toBe("Neuer Vertrag")
  })

  it("saves contract as work in progress when requested", async () => {
    const wrapper = mount(ContractScreen, {
      global: {
        stubs: {
          Button: true,
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

    wrapper.findComponent(ContractSideMenu).vm.$emit("save")

    expect(contractTestRepository.load().title).toBe("Neuer Vertrag")
  })
})
