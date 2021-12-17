import { mount } from "@vue/test-utils"
import { createTestingPinia } from "@pinia/testing"
import Contract from "../../src/domain/Contract"
import Module from "../../src/domain/Module"
import { Answer, Step, TextAnswerStep } from "../../src/domain/Step"
import { Session, useStore } from "../../src/infra/Session"
import ContractEdit from "../../src/components/ContractEdit.vue"

describe("ContractEdit", () => {
  it("updates session when navigating steps", async () => {
    const contract = new Contract("", [
      new Module("foo", [new TextAnswerStep("foo")]),
      new Module("bar", [new TextAnswerStep("bar")]),
    ])
    const pinia = createTestingPinia()
    useStore().$state = new Session(
      new Map<Contract, Step<Answer>>().set(
        contract,
        contract.modules[0].steps[0]
      )
    )
    const wrapper = mount(ContractEdit, {
      props: {
        contract: contract,
      },
      global: {
        plugins: [pinia],
      },
    })

    expect(useStore().$state.getCurrentStep(contract)).toEqual(
      contract.modules[0].steps[0]
    )
    await wrapper.find("button").trigger("click") // next
    expect(useStore().$state.getCurrentStep(contract)).toEqual(
      contract.modules[1].steps[0]
    )
    await wrapper.find("button").trigger("click") // previous
    expect(useStore().$state.getCurrentStep(contract)).toEqual(
      contract.modules[0].steps[0]
    )
  })
})
