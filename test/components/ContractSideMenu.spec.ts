import { mount } from "@vue/test-utils"
import { fireEvent, render, screen } from "@testing-library/vue"
import { createTestingPinia } from "@pinia/testing"
import { createRouter, createWebHistory } from "vue-router"
import PrimeVue from "primevue/config"
import Module from "../../src/domain/Module"
import { Answer, Step, TextAnswerStep } from "../../src/domain/Step"
import Contract from "../../src/domain/Contract"
import { Session, useStore } from "../../src/infra/session"
import ContractSideMenu from "../../src/components/ContractSideMenu.vue"

const module1: Module = new Module("Rubrum")
module1.addSteps(
  new TextAnswerStep("Schritt 1.1"),
  new TextAnswerStep("Schritt 1.2"),
  new TextAnswerStep("Schritt 1.3")
)
const module2: Module = new Module("Gegenstand und Bestandteile des Vertrags")
module2.addSteps(
  new TextAnswerStep("Schritt 2.1"),
  new TextAnswerStep("Schritt 2.2"),
  new TextAnswerStep("Schritt 2.3")
)

const testModules: Module[] = [module1, module2]

describe("ContractSideMenu", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/mitra-frontend/",
        component: {
          template: "<div></div>",
        },
      },
    ],
  })

  beforeAll(async () => {
    router.push("/mitra-frontend/")
    await router.isReady()
  })

  it("should render all fixed menu items", () => {
    render(ContractSideMenu, {
      props: {
        contract: new Contract("", testModules),
      },
      global: {
        plugins: [router, createTestingPinia(), PrimeVue],
      },
    })
    expect(screen.getByText("Startseite")).toBeVisible()
    expect(screen.getByText("Module")).toBeVisible()
    expect(screen.getByText("1. Rubrum")).toBeVisible()
    expect(
      screen.getByText("2. Gegenstand und Bestandteile des Vertrags")
    ).toBeVisible()
    expect(screen.getByText("Speichern")).toBeVisible()
  })

  it("should issue command to navigate to module", async () => {
    const { emitted } = render(ContractSideMenu, {
      props: {
        contract: new Contract("", testModules),
      },
      global: {
        plugins: [router, createTestingPinia(), PrimeVue],
      },
    })
    await fireEvent.click(screen.getByText("Module"))
    await fireEvent.click(
      screen.getByText("2. Gegenstand und Bestandteile des Vertrags")
    )
    expect(emitted().navigate).toBeTruthy()
  })

  it("should issue command to save contract", async () => {
    const { emitted } = render(ContractSideMenu, {
      props: {
        contract: new Contract("", testModules),
      },
      global: {
        plugins: [router, createTestingPinia(), PrimeVue],
      },
    })
    await fireEvent.click(screen.getByText("Speichern"))
    expect(emitted().save).toBeTruthy()
  })

  it("should highlight module of currently worked on step", () => {
    const contract = new Contract("", testModules)
    const pinia = createTestingPinia()
    useStore().$state = new Session(
      new Map<Contract, Step<Answer>>().set(
        contract,
        contract.modules[1].steps[0]
      )
    )
    const wrapper = mount(ContractSideMenu, {
      props: {
        contract: contract,
      },
      global: {
        plugins: [router, pinia, PrimeVue],
      },
    })

    expect(wrapper.find(".font-bold").element).toHaveTextContent(
      "2. Gegenstand und Bestandteile des Vertrags"
    )
  })
})
