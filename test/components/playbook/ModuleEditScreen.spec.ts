import { createTestingPinia } from "@pinia/testing"
import { render, screen, fireEvent } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import ModuleEditScreen from "../../../src/components/playbook/ModuleEditScreen.vue"
import Module from "../../../src/domain/Module"
import Playbook from "../../../src/domain/Playbook"
import { useSession } from "../../../src/session"

describe("ModuleEditScreen", () => {
  const pinia = createTestingPinia()
  const session = useSession()

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "",
        component: {},
      },
      {
        path: "/mitra-frontend/",
        component: {},
      },
      {
        path: "/mitra-frontend/playbook/:playbook",
        component: {},
      },
      {
        path: "/mitra-frontend/playbook/:playbook/module/:module",
        component: {},
      },
    ],
  })

  beforeAll(async () => {
    session.rememberPlaybook(
      new Playbook("test-playbook", [new Module("test-module", [], "xyz")])
    )

    router.push("/mitra-frontend/")
    await router.isReady()
  })

  it("has a header with the module title", async () => {
    render(ModuleEditScreen, {
      props: {
        playbookId: "xyz",
        moduleId: "xyz",
      },
      global: {
        plugins: [pinia, router],
        stubs: ["Breadcrumb", "SideMenu"],
      },
    })

    await screen.findByText("test-module")
  })

  it("has a breadcrumb navigation", async () => {
    render(ModuleEditScreen, {
      props: {
        playbookId: "xyz",
        moduleId: "xyz",
      },
      global: {
        plugins: [pinia, router],
        stubs: ["Inplace", "SideMenu"],
      },
    })

    await screen.findByText("test-module")
  })

  it("has a remove module button", async () => {
    render(ModuleEditScreen, {
      props: {
        playbookId: "xyz",
        moduleId: "xyz",
      },
      global: {
        plugins: [pinia, router],
        stubs: ["Inplace", "SideMenu"],
      },
    })

    await screen.findByText("Modul löschen")
  })

  it("can add steps", async () => {
    render(ModuleEditScreen, {
      props: {
        playbookId: "xyz",
        moduleId: "xyz",
      },
      global: {
        plugins: [pinia, router],
        stubs: ["SideMenu"],
      },
    })

    await fireEvent.click(screen.getByText("Neue Frage"))
    await screen.findAllByText("Neue Frage")
  })
})
