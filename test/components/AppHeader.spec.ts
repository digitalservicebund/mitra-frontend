import { render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import AppHeader from "../../src/components/AppHeader.vue"

describe("AppHeader", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/mitra-frontend/",
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

  it("should display header text", async () => {
    render(AppHeader, {
      global: {
        plugins: [router],
      },
    })
    expect(screen.getByText("Mitra")).toBeVisible()
  })
})
