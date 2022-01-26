import { createTestingPinia } from "@pinia/testing"
import { mount } from "@vue/test-utils"
import EditStep from "../../../src/components/contract/EditStep.vue"
import Contract from "../../../src/domain/Contract"
import Module from "../../../src/domain/Module"
import { TextAnswerStep } from "../../../src/domain/Step"
import { useSession } from "../../../src/session"

describe("EditStep", () => {
  it("updates session when navigating steps", async () => {
    const contract = new Contract("", [
      new Module("foo", [new TextAnswerStep("foo")]),
      new Module("bar", [new TextAnswerStep("bar")]),
    ])
    const pinia = createTestingPinia()
    const session = useSession()
    session.rememberCurrentStep(contract, contract.modules[0].steps[0])

    const wrapper = mount(EditStep, {
      props: {
        contract: contract,
      },
      global: {
        plugins: [pinia],
      },
    })

    expect(session.cache.get(contract.id)).toEqual(contract.modules[0].steps[0])
    await wrapper.find("button").trigger("click") // next
    expect(session.cache.get(contract.id)).toEqual(contract.modules[1].steps[0])
    await wrapper.find("button").trigger("click") // back
    expect(session.cache.get(contract.id)).toEqual(contract.modules[0].steps[0])
  })
})
