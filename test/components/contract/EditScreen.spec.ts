import { createTestingPinia } from "@pinia/testing"
import { render, screen } from "@testing-library/vue"
import { mount } from "@vue/test-utils"
import PrimeVue from "primevue/config"
import EditScreen from "../../../src/components/contract/EditScreen.vue"
import SideMenu from "../../../src/components/SideMenu.vue"
import Contract from "../../../src/domain/Contract"
import ContractStorageService from "../../../src/domain/ContractStorageService"
import Module from "../../../src/domain/Module"
import { TextAnswerStep } from "../../../src/domain/Step"
import { makeContractStorageService } from "../../../src/provide"
import { useSession } from "../../../src/session"

describe("EditScreen", () => {
  it("has a header with the contract title", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia()],
        stubs: [
          "Breadcrumb",
          "SideMenu",
          "RouterLink",
          "EditStep",
          "ContractPreview",
        ],
      },
    })

    await screen.findByText("Unbenannter Vertrag")
  })

  it("has a breadcrumb navigation", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia()],
        stubs: [
          "Inplace",
          "SideMenu",
          "RouterLink",
          "EditStep",
          "ContractPreview",
        ],
      },
    })

    await screen.findByText("Unbenannter Vertrag")
  })

  it("updates contract title when entered", () => {
    const wrapper = mount(EditScreen, {
      props: {
        id: "contract-id",
      },
      global: {
        plugins: [createTestingPinia(), PrimeVue],
        stubs: ["Breadcrumb", "RouterLink", "EditStep", "ContractPreview"],
      },
    })
    const vm: unknown = wrapper.vm
    const instance = vm as {
      contract: Contract
      editableTitle: string
      updateTitle: () => void
    }

    expect(instance.contract.title).toBe("Unbenannter Vertrag")

    // Simulate text input
    instance.editableTitle = "Neuer Vertrag"
    instance.updateTitle()

    expect(instance.contract.title).toBe("Neuer Vertrag")
  })

  it("saves contract as work in progress when requested", () => {
    const contract = new Contract(undefined, [
      new Module("foo", [new TextAnswerStep("foo")]),
      new Module("bar", [new TextAnswerStep("bar")]),
    ])
    const pinia = createTestingPinia()
    const session = useSession()
    session.rememberCurrentStep(contract, contract.modules[0].steps[0])

    const wrapper = mount(EditScreen, {
      props: {
        id: "contract-id",
      },
      global: {
        plugins: [pinia, PrimeVue],
        stubs: ["Breadcrumb", "RouterLink", "EditStep", "ContractPreview"],
      },
    })
    const vm: unknown = wrapper.vm
    const instance = vm as {
      contract: Contract
    }
    wrapper.findComponent(SideMenu).vm.$emit("save")

    const storage: ContractStorageService = makeContractStorageService()
    expect(storage.save).toHaveBeenNthCalledWith(1, instance.contract)
  })
})
