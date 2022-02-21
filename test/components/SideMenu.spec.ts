import { createTestingPinia } from "@pinia/testing"
import { fireEvent, render, screen } from "@testing-library/vue"
import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import SideMenu from "../../src/components/SideMenu.vue"
import Contract from "../../src/domain/Contract"
import Module from "../../src/domain/Module"
import { TextAnswerStep } from "../../src/domain/Step"
import { useSession } from "../../src/session"

const testModules: Module[] = [
  new Module("Rubrum", [
    new TextAnswerStep("Schritt 1.1"),
    new TextAnswerStep("Schritt 1.2"),
    new TextAnswerStep("Schritt 1.3"),
  ]),
  new Module("Gegenstand und Bestandteile des Vertrags", [
    new TextAnswerStep("Schritt 2.1"),
    new TextAnswerStep("Schritt 2.2"),
    new TextAnswerStep("Schritt 2.3"),
  ]),
]
const contract = new Contract("test-contract", testModules, { id: "xyz" })

describe("SideMenu", () => {
  const pinia = createTestingPinia()
  const session = useSession()

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/mitra-frontend/",
        component: {},
      },
      {
        path: "/mitra-frontend/:navigatable/:id",
        component: {},
      },
    ],
  })

  beforeAll(async () => {
    session.rememberContract(contract)

    router.push("/mitra-frontend/")
    await router.isReady()
  })

  it("should render all fixed menu items", () => {
    render(SideMenu, {
      props: {
        title: "foo",
        navigatable: contract,
      },
      global: {
        plugins: [router, pinia],
      },
    })
    expect(screen.getByText("Startseite")).toBeVisible()
    expect(screen.getByText("Rubrum")).toBeVisible()
    expect(
      screen.getByText("Gegenstand und Bestandteile des Vertrags")
    ).toBeVisible()
    expect(screen.getByText("Speichern")).toBeVisible()
  })

  it("should issue command to navigate to module", async () => {
    const { emitted } = render(SideMenu, {
      props: {
        title: "foo",
        navigatable: contract,
      },
      global: {
        plugins: [router, pinia],
      },
    })
    await fireEvent.click(
      screen.getByText("Gegenstand und Bestandteile des Vertrags")
    )
    expect(emitted().navigate).toBeTruthy()
  })

  it("should issue command to save contract", async () => {
    const { emitted } = render(SideMenu, {
      props: {
        title: "foo",
        navigatable: contract,
      },
      global: {
        plugins: [router, pinia],
      },
    })
    await fireEvent.click(screen.getByText("Speichern"))
    expect(emitted().save).toBeTruthy()
  })

  it("should highlight module of currently worked on step", () => {
    const wrapper = mount(SideMenu, {
      props: {
        title: "foo",
        navigatable: contract,
      },
      global: {
        plugins: [router, pinia],
      },
    })

    expect(
      wrapper.find("[style='font-weight: bold;']").element
    ).toHaveTextContent("Rubrum")
  })
})
