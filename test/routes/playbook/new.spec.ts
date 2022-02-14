import { createTestingPinia } from "@pinia/testing"
import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import CreateContract from "../../../src/routes/playbook/new.vue"

describe("/playbook/new", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/mitra-frontend/",
        component: {},
      },
      {
        path: "/mitra-frontend/playbook/:id",
        component: {},
      },
    ],
  })

  beforeAll(async () => {
    router.push("/mitra-frontend/")
    await router.isReady()
  })

  it("redirects to created playbook", () => {
    const replace = jest.spyOn(router, "replace")

    mount(CreateContract, {
      global: {
        plugins: [router, createTestingPinia()],
      },
    })

    expect(replace).toHaveBeenCalledTimes(1)
  })
})
