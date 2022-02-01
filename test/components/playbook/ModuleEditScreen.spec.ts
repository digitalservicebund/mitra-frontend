import { createTestingPinia } from "@pinia/testing"
import { render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import ModuleEditScreen from "../../../src/components/playbook/ModuleEditScreen.vue"

describe("ModuleEditScreen", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "",
        component: {
          template: "<div></div>",
        },
      },
      {
        path: "/mitra-frontend/",
        component: {
          template: "<div></div>",
        },
      },
      {
        path: "/mitra-frontend/playbook/:playbook",
        component: {
          template: "<div></div>",
        },
      },
      {
        path: "/mitra-frontend/playbook/:playbook/module/:module",
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

  it("has a header with the module title", async () => {
    render(ModuleEditScreen, {
      props: {
        playbookId: "xyz",
        moduleId: "xyz",
      },
      global: {
        plugins: [createTestingPinia(), router],
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
        plugins: [createTestingPinia(), router],
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
        plugins: [createTestingPinia(), router],
        stubs: ["Inplace", "SideMenu"],
      },
    })

    await screen.findByText("Modul löschen")
  })
})
