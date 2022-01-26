import { createTestingPinia } from "@pinia/testing"
import { mount, shallowMount } from "@vue/test-utils"
import PrimeVue from "primevue/config"
import ContractScreen from "../../../src/components/contract/Screen.vue"
import ContractSideMenu from "../../../src/components/contract/SideMenu.vue"
import Contract from "../../../src/domain/Contract"
import ContractStorageService from "../../../src/domain/ContractStorageService"
import Module from "../../../src/domain/Module"
import { TextAnswerStep } from "../../../src/domain/Step"
import { makeContractStorageService } from "../../../src/provide"
import { useSession } from "../../../src/session"

describe("ContractScreen", () => {
  it("updates contract title when entered", () => {
    const wrapper = shallowMount(ContractScreen, {
      props: {
        id: "contract-id",
      },
      global: {
        plugins: [createTestingPinia(), PrimeVue],
      },
    })
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
    const contract = new Contract("", [
      new Module("foo", [new TextAnswerStep("foo")]),
      new Module("bar", [new TextAnswerStep("bar")]),
    ])
    const pinia = createTestingPinia()
    const session = useSession()
    session.rememberCurrentStep(contract, contract.modules[0].steps[0])

    const wrapper = mount(ContractScreen, {
      props: {
        id: "contract-id",
      },
      global: {
        plugins: [pinia, PrimeVue],
        stubs: ["Button", "Dialog", "RouterLink", "ContractEdit"],
      },
    })
    const vm: unknown = wrapper.vm
    const instance = vm as {
      contract: Contract
    }
    wrapper.findComponent(ContractSideMenu).vm.$emit("save")

    const storage: ContractStorageService = makeContractStorageService()
    expect(storage.save).toHaveBeenNthCalledWith(1, instance.contract)
  })
})
