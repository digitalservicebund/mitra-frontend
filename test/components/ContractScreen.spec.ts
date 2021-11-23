import { shallowMount } from "@vue/test-utils"
import ContractScreen from "../../src/components/ContractScreen.vue"

describe("ContractScreen", () => {
  it("updates contract name when entered", () => {
    const wrapper = shallowMount(ContractScreen)
    expect(wrapper.vm.playbook.name).toBe("Unbenannter Vertrag")

    // Simulate text input
    wrapper.vm.titleInput = "Neuer Vertrag"
    wrapper.vm.saveTitle()

    expect(wrapper.vm.playbook.name).toBe("Neuer Vertrag")
  })
})
