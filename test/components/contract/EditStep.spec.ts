import { createTestingPinia } from "@pinia/testing"
import { render, screen } from "@testing-library/vue"
import { mount } from "@vue/test-utils"
import EditStep from "../../../src/components/contract/EditStep.vue"
import Contract from "../../../src/domain/Contract"
import Module from "../../../src/domain/Module"
import { TextAnswerStep } from "../../../src/domain/Step"
import { useSession } from "../../../src/session"

describe("EditStep", () => {
  const contract = new Contract(undefined, [
    new Module("foo", [
      new TextAnswerStep("foo", { description: "foo description" }),
    ]),
    new Module("bar", [new TextAnswerStep("bar")]),
  ])
  const pinia = createTestingPinia()
  const session = useSession()
  session.rememberContract(contract, contract.modules[0].steps[0])

  it("updates session when navigating steps", async () => {
    const wrapper = mount(EditStep, {
      props: {
        contract: contract,
      },
      global: {
        plugins: [pinia],
      },
    })

    expect(session.lastEditedStep).toEqual(contract.modules[0].steps[0])
    await wrapper.find("button").trigger("click") // next
    expect(session.lastEditedStep).toEqual(contract.modules[1].steps[0])
    await wrapper.find("button").trigger("click") // back
    expect(session.lastEditedStep).toEqual(contract.modules[0].steps[0])
  })

  it("displays description", async () => {
    render(EditStep, {
      props: {
        contract: contract,
      },
      global: {
        plugins: [pinia],
      },
    })

    await screen.findByText("foo description")
  })
})
