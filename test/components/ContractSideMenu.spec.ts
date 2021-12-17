import { fireEvent, render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import PrimeVue from "primevue/config"
import ContractSideMenu from "../../src/components/ContractSideMenu.vue"
import Module from "../../src/domain/Module"
import { TextAnswerStep } from "../../src/domain/Step"

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
        modules: testModules,
      },
      global: {
        plugins: [router, PrimeVue],
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
        modules: testModules,
      },
      global: {
        plugins: [router, PrimeVue],
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
        modules: testModules,
      },
      global: {
        plugins: [router, PrimeVue],
      },
    })
    await fireEvent.click(screen.getByText("Speichern"))
    expect(emitted().save).toBeTruthy()
  })
})
