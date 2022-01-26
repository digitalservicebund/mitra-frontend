import { createTestingPinia } from "@pinia/testing"
import { fireEvent, render, screen } from "@testing-library/vue"
import { mount } from "@vue/test-utils"
import PrimeVue from "primevue/config"
import { createRouter, createWebHistory } from "vue-router"
import SideMenu from "../../src/components/SideMenu.vue"
import Contract from "../../src/domain/Contract"
import Module from "../../src/domain/Module"
import { TextAnswerStep } from "../../src/domain/Step"
import { useSession } from "../../src/session"

const module1: Module = new Module("Rubrum", [
  new TextAnswerStep("Schritt 1.1"),
  new TextAnswerStep("Schritt 1.2"),
  new TextAnswerStep("Schritt 1.3"),
])
const module2: Module = new Module("Gegenstand und Bestandteile des Vertrags", [
  new TextAnswerStep("Schritt 2.1"),
  new TextAnswerStep("Schritt 2.2"),
  new TextAnswerStep("Schritt 2.3"),
])
const testModules: Module[] = [module1, module2]

describe("SideMenu", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/mitra-frontend/",
        component: {
          template: "<div></div>",
        },
      },
      {
        path: "/mitra-frontend/:navigatable/:id",
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
    render(SideMenu, {
      props: {
        navigatable: new Contract(undefined, testModules),
      },
      global: {
        plugins: [router, createTestingPinia(), PrimeVue],
      },
    })
    expect(screen.getByText("Startseite")).toBeVisible()
    expect(screen.getByText("1. Rubrum")).toBeVisible()
    expect(
      screen.getByText("2. Gegenstand und Bestandteile des Vertrags")
    ).toBeVisible()
    expect(screen.getByText("Speichern")).toBeVisible()
  })

  it("should issue command to navigate to module", async () => {
    const { emitted } = render(SideMenu, {
      props: {
        navigatable: new Contract(undefined, testModules),
      },
      global: {
        plugins: [router, createTestingPinia(), PrimeVue],
      },
    })
    await fireEvent.click(
      screen.getByText("2. Gegenstand und Bestandteile des Vertrags")
    )
    expect(emitted().navigate).toBeTruthy()
  })

  it("should issue command to save contract", async () => {
    const { emitted } = render(SideMenu, {
      props: {
        navigatable: new Contract(undefined, testModules),
      },
      global: {
        plugins: [router, createTestingPinia(), PrimeVue],
      },
    })
    await fireEvent.click(screen.getByText("Speichern"))
    expect(emitted().save).toBeTruthy()
  })

  it("should highlight module of currently worked on step", () => {
    const contract = new Contract(undefined, testModules)
    const pinia = createTestingPinia()
    const session = useSession()
    session.rememberCurrentStep(contract, contract.modules[1].steps[0])

    const wrapper = mount(SideMenu, {
      props: {
        navigatable: contract,
      },
      global: {
        plugins: [router, pinia, PrimeVue],
      },
    })

    expect(
      wrapper.find("[style='font-weight: bold;']").element
    ).toHaveTextContent("2. Gegenstand und Bestandteile des Vertrags")
  })
})
