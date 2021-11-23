import { shallowMount } from "@vue/test-utils"
import ContractScreen from "../../src/components/ContractScreen.vue"
import Playbook from "../../src/domain/Playbook"

describe("ContractScreen", () => {
  it("updates contract name when entered", () => {
    const wrapper = shallowMount(ContractScreen)
    const vm: unknown = wrapper.vm
    const instance = vm as {
      playbook: Playbook
      titleInput: string
      saveTitle: () => void
    }

    expect(instance.playbook.name).toBe("Unbenannter Vertrag")

    // Simulate text input
    instance.titleInput = "Neuer Vertrag"
    instance.saveTitle()

    expect(instance.playbook.name).toBe("Neuer Vertrag")
  })
})
