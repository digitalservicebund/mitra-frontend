import { createTestingPinia } from "@pinia/testing"
import { render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import Breadcrumb from "../../src/components/Breadcrumb.vue"
import Module from "../../src/domain/Module"
import Playbook from "../../src/domain/Playbook"

describe("Breadcrumb", () => {
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
        path: "/",
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
        path: "/mitra-frontend/playbook/:playbook/module/:module",
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
    ],
  })

  it("shows Startpage", () => {
    render(Breadcrumb, {
      props: {
        parentItems: [],
        currentTitle: new Playbook("foo Playbook").title,
      },
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    const startPage = screen.getByText("Startseite")
    expect(startPage).toHaveAttribute("href", "/mitra-frontend/")
  })

  it("shows Playbook in Module view", () => {
    render(Breadcrumb, {
      props: {
        parentItems: [new Playbook("foo Playbook")],
        currentTitle: new Module("foo Module").title,
      },
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    const playbook = screen.getByText("foo Playbook")
    expect(playbook).toBeVisible()
    expect(playbook).toHaveAttribute(
      "href",
      expect.stringMatching(/\/mitra-frontend\/playbook\/[a-z0-9-]+$/)
    )
  })

  it("shows module title in modue view", () => {
    render(Breadcrumb, {
      props: {
        parentItems: [new Playbook("foo Playbook")],
        currentTitle: new Module("foo Module").title,
      },
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(screen.getByText("foo Module")).toBeVisible()
  })
})
