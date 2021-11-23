import { shallowMount } from "@vue/test-utils"
import ContractScreen from "../../src/components/ContractScreen.vue"
import Contract from "../../src/domain/Contract"

describe("ContractScreen", () => {
  it("updates contract name when entered", () => {
    const wrapper = shallowMount(ContractScreen)
    const vm: unknown = wrapper.vm
    const instance = vm as {
      contract: Contract
      titleInput: string
      saveTitle: () => void
    }

    expect(instance.contract.name).toBe("")

    // Simulate text input
    instance.titleInput = "Neuer Vertrag"
    instance.saveTitle()

    expect(instance.contract.name).toBe("Neuer Vertrag")
  })
})
