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
        items: [new Playbook("foo Playbook")],
      },
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    const startPage = screen.getByText("Startseite")
    expect(startPage).toHaveAttribute("href", "/mitra-frontend/")
  })

  it("shows Playbook", () => {
    render(Breadcrumb, {
      props: {
        items: [new Playbook("foo Playbook")],
      },
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    const playbook = screen.getByText("foo Playbook")
    expect(playbook).toHaveAttribute(
      "href",
      expect.stringMatching(/\/mitra-frontend\/playbook\/[a-z0-9-]+$/)
    )
  })

  it("shows both Module and Playbook", () => {
    render(Breadcrumb, {
      props: {
        items: [new Playbook("foo Playbook"), new Module("foo Module")],
      },
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    const playbook = screen.getByText("foo Playbook")
    const module = screen.getByText("foo Module")
    expect(playbook).toHaveAttribute(
      "href",
      expect.stringMatching(/\/mitra-frontend\/playbook\/[a-z0-9-]+$/)
    )
    expect(module).toHaveAttribute(
      "href",
      expect.stringMatching(
        /\/mitra-frontend\/playbook\/[a-z0-9-]+\/module\/[a-z0-9-]+$/
      )
    )
  })
})
