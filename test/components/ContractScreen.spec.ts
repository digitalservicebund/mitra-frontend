import { mount, shallowMount } from "@vue/test-utils"
import ContractScreen from "../../src/components/ContractScreen.vue"
import ContractSideMenu from "../../src/components/ContractSideMenu.vue"
import Contract from "../../src/domain/Contract"
import SaveContract from "../../src/domain/SaveContract"
import { makeSaveContract } from "../../src/provide"

describe("ContractScreen", () => {
  it("updates contract title when entered", () => {
    const wrapper = shallowMount(ContractScreen, {
      props: { id: "contract-id" },
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
    const wrapper = mount(ContractScreen, {
      props: {
        id: "contract-id",
      },
      global: {
        stubs: {
          Button: true,
          Dialog: true,
          RouterLink: true,
          ContractEdit: true,
        },
      },
    })
    const vm: unknown = wrapper.vm
    const instance = vm as {
      contract: Contract
    }

    wrapper.findComponent(ContractSideMenu).vm.$emit("save")

    const saveContract: SaveContract = makeSaveContract()
    expect(saveContract.save).toHaveBeenNthCalledWith(1, instance.contract)
  })
})
