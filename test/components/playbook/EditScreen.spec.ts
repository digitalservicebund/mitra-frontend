import { createTestingPinia } from "@pinia/testing"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/vue"
import PrimeVue from "primevue/config"
import { createRouter, createWebHistory } from "vue-router"
import EditScreen from "../../../src/components/playbook/EditScreen.vue"
import Module from "../../../src/domain/Module"
import Playbook from "../../../src/domain/Playbook"
import PlaybookStorageService from "../../../src/domain/PlaybookStorageService"
import { TextAnswerStep } from "../../../src/domain/Step"
import { makePlaybookStorageService } from "../../../src/provide"
import { useSession } from "../../../src/session"

describe("EditScreen", () => {
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
      new Playbook("test-playbook", [
        new Module("test-module", [new TextAnswerStep("test-step")]),
      ])
    )

    router.push("/mitra-frontend/")
    await router.isReady()
  })

  it("has a header with the playbook title", async () => {
    render(EditScreen, {
      global: {
        plugins: [pinia, router],
        stubs: ["Breadcrumb", "SideMenu"],
      },
    })

    await screen.findByText("test-playbook")
  })

  it("has a breadcrumb navigation", async () => {
    render(EditScreen, {
      global: {
        plugins: [pinia, router],
        stubs: ["Inplace", "SideMenu"],
      },
    })

    await screen.findByText("test-playbook")
  })

  it("lists the playbook's modules", async () => {
    render(EditScreen, {
      global: {
        plugins: [pinia, router],
        stubs: ["Breadcrumb", "Inplace", "SideMenu"],
      },
    })

    await screen.findByText("Module")
    await screen.findByText("test-module")
    await screen.findByText("1 Fragen")
  })

  it("has a add module button", async () => {
    render(EditScreen, {
      global: {
        plugins: [pinia, router],
        stubs: ["Breadcrumb", "Inplace", "SideMenu"],
      },
    })

    await screen.findByText("Neues Modul")
  })

  it("saves playbook as work in progress when requested", async () => {
    const user = userEvent.setup()
    render(EditScreen, {
      global: {
        plugins: [pinia, router, PrimeVue],
        stubs: ["Breadcrumb", "RouterLink"],
      },
    })

    await user.click(screen.getByText("Ändern"))
    await user.clear(screen.getByLabelText("Eigenschaft ändern"))
    await user.type(screen.getByLabelText("Eigenschaft ändern"), "Neuer Titel")
    await user.click(screen.getByText("Speichern"))

    const storage: PlaybookStorageService = makePlaybookStorageService()
    expect(storage.save).toHaveBeenNthCalledWith(1, session.playbook)
  })
})
