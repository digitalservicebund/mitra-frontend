import { render, screen } from "@testing-library/vue"
import Step from "../../../src/components/playbook/StepListView.vue"
import { TextAnswerStep } from "../../../src/domain/Step"

describe("Step", () => {
  const step = new TextAnswerStep("Fragetext eintragen")

  it("displays the title", async () => {
    render(Step, {
      props: {
        step: step,
      },
    })
    await screen.findByText("Fragetext eintragen")
  })

  it("has a menu button", async () => {
    render(Step, {
      props: {
        step: step,
      },
    })

    await screen.findByLabelText("menu")
  })
})
