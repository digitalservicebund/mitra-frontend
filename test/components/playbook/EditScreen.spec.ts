import { createTestingPinia } from "@pinia/testing"
import { render, screen } from "@testing-library/vue"
import EditScreen from "../../../src/components/playbook/EditScreen.vue"

describe("EditScreen", () => {
  it("has a header with the playbook title", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia()],
        stubs: ["Breadcrumb", "SideMenu", "RouterLink"],
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
        plugins: [createTestingPinia()],
        stubs: ["Inplace", "SideMenu", "RouterLink"],
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
        plugins: [createTestingPinia()],
        stubs: ["Breadcrumb", "Inplace", "SideMenu", "RouterLink"],
      },
    })

    await screen.findByText("Module")
    await screen.findByText("test-module")
    await screen.findByText("1 Fragen")
  })
})
