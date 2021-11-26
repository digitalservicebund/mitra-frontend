import { fireEvent, render, screen } from "@testing-library/vue"
import { createRouter, createMemoryHistory } from "vue-router"
import ContractSideMenu from "../../src/components/ContractSideMenu.vue"
import Module from "../../src/domain/Module"
import Step from "../../src/domain/Step"

const module1: Module = new Module("Rubrum")
module1.addSteps(
  new Step("Schritt 1.1"),
  new Step("Schritt 1.2"),
  new Step("Schritt 1.3")
)
const module2: Module = new Module("Gegenstand und Bestandteile des Vertrags")
module2.addSteps(
  new Step("Schritt 2.1"),
  new Step("Schritt 2.2"),
  new Step("Schritt 2.3")
)

const testModules: Module[] = [module1, module2]

describe("ContractSideMenu", () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: "/",
        name: "mitra-frontend",
        component: {
          template: "<div></div>",
        },
      },
    ],
  })

  it("should render all fixed menu items", () => {
    render(ContractSideMenu, {
      props: {
        modules: testModules,
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

  it("should render all modules", async () => {
    render(ContractSideMenu, {
      props: {
        modules: testModules,
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
  })
})
