import { createTestingPinia } from "@pinia/testing"
import { mount } from "@vue/test-utils"
import SheetAnswerStepComponent from "../../../src/components/contract/SheetAnswerStep.vue"
import { SheetAnswer, SheetAnswerStep } from "../../../src/domain/Step"

describe("SheetAnswerStep", () => {
  it("should render label within table head", async () => {
    const step = new SheetAnswerStep(
      "test step",
      new SheetAnswer([{ fooHead: "", barHead: "" }])
    )
    const pinia = createTestingPinia()
    const wrapper = mount(SheetAnswerStepComponent, {
      props: {
        step: step,
      },
      global: {
        plugins: [pinia],
      },
    })

    // PrimeVue table uses text multiple times, but should only display in thead
    expect(wrapper.find("thead").text()).toBe("fooHeadbarHead")
  })

  it("appends three rows to empty table", async () => {
    const step = new SheetAnswerStep(
      "test step",
      new SheetAnswer([{ fooHead: "", barHead: "" }])
    )
    const pinia = createTestingPinia()
    const wrapper = mount(SheetAnswerStepComponent, {
      props: {
        step: step,
      },
      global: {
        plugins: [pinia],
      },
    })

    const rows = wrapper.find("#edit-sheet tbody").findAll("tr")
    expect(rows).toHaveLength(3)
  })

  it("appends two rows to partially filled table", async () => {
    const step = new SheetAnswerStep(
      "test step",
      new SheetAnswer([
        { fooHead: "foo", barHead: "bar" },
        { fooHead: "", barHead: "" },
        { fooHead: "", barHead: "" },
        { fooHead: "foooo", barHead: "baaar" },
      ])
    )
    const pinia = createTestingPinia()
    const wrapper = mount(SheetAnswerStepComponent, {
      props: {
        step: step,
      },
      global: {
        plugins: [pinia],
      },
    })

    const rows = wrapper.find("#edit-sheet tbody").findAll("tr")
    expect(rows).toHaveLength(5)
  })
})
