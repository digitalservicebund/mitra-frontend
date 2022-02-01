import { createTestingPinia } from "@pinia/testing"
import { render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import EditScreen from "../../../src/components/playbook/EditScreen.vue"

describe("EditScreen", () => {
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
})
