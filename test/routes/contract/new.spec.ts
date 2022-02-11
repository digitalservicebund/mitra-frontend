import { createTestingPinia } from "@pinia/testing"
import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import CreateContract from "../../../src/routes/contract/new.vue"

describe("/contract/new", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/mitra-frontend/",
        component: {},
      },
      {
        path: "/mitra-frontend/contract/:id",
        component: {},
      },
    ],
  })

  beforeAll(async () => {
    router.push("/mitra-frontend/")
    await router.isReady()
  })

  it("redirects to created contract", () => {
    const replace = jest.spyOn(router, "replace")

    mount(CreateContract, {
      global: {
        plugins: [router, createTestingPinia()],
      },
    })

    expect(replace).toHaveBeenCalledTimes(1)
  })
})
