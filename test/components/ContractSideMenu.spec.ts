import { render, screen, fireEvent } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import ContractSideMenu from "../../src/components/ContractSideMenu.vue"
import Playbook from "../../src/domain/Playbook"

const testPlaybook: Playbook = {
  modules: [
    {
      text: "Rubrum",
      steps: [
        { text: "Schritt 1.1" },
        { text: "Schritt 1.2" },
        { text: "Schritt 1.3" },
      ],
    },
    {
      text: "Gegenstand und Bestandteile des Vertrags",
      steps: [
        { text: "Schritt 2.1" },
        { text: "Schritt 2.2" },
        { text: "Schritt 2.3" },
      ],
    },
    {
      text: "Gegenstand der Leistungen",
      steps: [
        { text: "Schritt 3.1" },
        { text: "Schritt 3.2" },
        { text: "Schritt 3.3" },
        { text: "Schritt 3.4" },
      ],
    },
  ],
}

describe("ContractSideMenu", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/mitra-frontend/contract",
        component: {
          template: "<div></div>",
        },
      },
    ],
  })

  beforeAll(async () => {
    router.push("/mitra-frontend/contract")
    await router.isReady()
  })

  it("should render all fixed menu items", async () => {
    render(ContractSideMenu, {
      props: {
        playbook: testPlaybook,
      },
      global: {
        plugins: [router],
      },
    })
    expect(screen.getByText("Startseite")).toBeVisible()
    expect(screen.getByText("Module")).toBeVisible()
    expect(screen.getByText("Fragenübersicht")).toBeVisible()
    expect(screen.getByText("TO-DOs")).toBeVisible()
    expect(screen.getByText("Notizen")).toBeVisible()
  })

  it("should render all modules of playbook", async () => {
    render(ContractSideMenu, {
      props: {
        playbook: testPlaybook,
      },
      global: {
        plugins: [router],
      },
    })
    await fireEvent.click(screen.getByText("Module"))
    expect(screen.getByText("1. Rubrum")).toBeVisible()
    expect(
      screen.getByText("2. Gegenstand und Bestandteile des Vertrags")
    ).toBeVisible()
    expect(screen.getByText("3. Gegenstand der Leistungen")).toBeVisible()
  })
})
