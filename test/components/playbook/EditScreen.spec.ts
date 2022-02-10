import { createTestingPinia } from "@pinia/testing"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/vue"
import PrimeVue from "primevue/config"
import { createRouter, createWebHistory } from "vue-router"
import EditScreen from "../../../src/components/playbook/EditScreen.vue"
import PlaybookStorageService from "../../../src/domain/PlaybookStorageService"
import {
  makePlaybookRepository,
  makePlaybookStorageService,
} from "../../../src/provide"

describe("EditScreen", () => {
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
    router.push("/mitra-frontend/")
    await router.isReady()
  })

  it("has a header with the playbook title", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia(), router],
        stubs: ["Breadcrumb", "SideMenu"],
      },
    })

    await screen.findByText("test-playbook")
  })

  it("has a breadcrumb navigation", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia(), router],
        stubs: ["Inplace", "SideMenu"],
      },
    })

    await screen.findByText("test-playbook")
  })

  it("lists the playbook's modules", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia(), router],
        stubs: ["Breadcrumb", "Inplace", "SideMenu"],
      },
    })

    await screen.findByText("Module")
    await screen.findByText("test-module")
    await screen.findByText("1 Fragen")
  })

  it("has a add module button", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia(), router],
        stubs: ["Breadcrumb", "Inplace", "SideMenu"],
      },
    })

    await screen.findByText("Neues Modul")
  })

  it("saves playbook as work in progress when requested", async () => {
    const user = userEvent.setup()
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia(), router, PrimeVue],
        stubs: ["Breadcrumb", "RouterLink"],
      },
    })

    await user.click(screen.getByText("Ändern"))
    await user.clear(screen.getByLabelText("Eigenschaft ändern"))
    await user.type(screen.getByLabelText("Eigenschaft ändern"), "Neuer Titel")
    await user.click(screen.getByText("Speichern"))

    // eslint-disable-next-line testing-library/await-async-query
    const contract = makePlaybookRepository().findById("xyz")
    expect(contract.title).toBe("Neuer Titel")

    const storage: PlaybookStorageService = makePlaybookStorageService()
    expect(storage.save).toHaveBeenNthCalledWith(1, contract)
  })
})
