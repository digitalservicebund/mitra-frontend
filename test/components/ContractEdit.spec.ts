import { mount } from "@vue/test-utils"
import { createTestingPinia } from "@pinia/testing"
import Contract from "../../src/domain/Contract"
import Module from "../../src/domain/Module"
import { TextAnswerStep } from "../../src/domain/Step"
import ContractEdit from "../../src/components/ContractEdit.vue"
import { useSession } from "../../src/session"

describe("ContractEdit", () => {
  it("updates session when navigating steps", async () => {
    const contract = new Contract("", [
      new Module("foo", [new TextAnswerStep("foo")]),
      new Module("bar", [new TextAnswerStep("bar")]),
    ])
    const pinia = createTestingPinia()
    const session = useSession()
    session.updateCurrentStep(contract, contract.modules[0].steps[0])

    const wrapper = mount(ContractEdit, {
      props: {
        contract: contract,
      },
      global: {
        plugins: [pinia],
      },
    })

    expect(session.cache.get(contract)).toEqual(contract.modules[0].steps[0])
    await wrapper.find("button").trigger("click") // next
    expect(session.cache.get(contract)).toEqual(contract.modules[1].steps[0])
    await wrapper.find("button").trigger("click") // back
    expect(session.cache.get(contract)).toEqual(contract.modules[0].steps[0])
  })
})
