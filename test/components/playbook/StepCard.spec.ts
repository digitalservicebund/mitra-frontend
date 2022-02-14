import { fireEvent, render, screen } from "@testing-library/vue"
import PrimeVue from "primevue/config"
import Step from "../../../src/components/playbook/StepCard.vue"
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

  it("should issue command to add a step", async () => {
    const { emitted } = render(Step, {
      props: {
        step: step,
      },
      global: {
        plugins: [PrimeVue],
        stubs: ["RouterLink"],
      },
    })

    await fireEvent.click(screen.getByLabelText("menu"))
    await fireEvent.click(screen.getByText("Neue Frage"))
    expect(emitted().addStep).toBeTruthy()
  })

  it("should issue command to duplicate a step", async () => {
    const { emitted } = render(Step, {
      props: {
        step: step,
      },
      global: {
        plugins: [PrimeVue],
        stubs: ["RouterLink"],
      },
    })

    await fireEvent.click(screen.getByLabelText("menu"))
    await fireEvent.click(screen.getByText("Frage duplizieren"))
    expect(emitted().duplicateStep).toBeTruthy()
  })

  it("should issue command to delete a step", async () => {
    const { emitted } = render(Step, {
      props: {
        step: step,
      },
      global: {
        plugins: [PrimeVue],
        stubs: ["RouterLink"],
      },
    })

    await fireEvent.click(screen.getByLabelText("menu"))
    await fireEvent.click(screen.getByText("Frage löschen"))
    expect(emitted().deleteStep).toBeTruthy()
  })

  it("displays the description", async () => {
    render(Step, {
      props: {
        step: step,
      },
    })
    expect(
      await screen.findByText("Erklärungstext (optional)")
    ).not.toBeVisible()
    await fireEvent.click(screen.getByText("Fragetext eintragen"))
    expect(await screen.findByText("Erklärungstext (optional)")).toBeVisible()
  })

  it("displays the type selection dropdown", async () => {
    render(Step, {
      props: {
        step: step,
      },
    })
    expect(await screen.findByText("kurzer Text")).not.toBeVisible()
    await fireEvent.click(screen.getByText("Fragetext eintragen"))
    expect(await screen.findByText("kurzer Text")).toBeVisible()
  })
})
