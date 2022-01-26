import { createTestingPinia } from "@pinia/testing"
import { render, screen } from "@testing-library/vue"
import PlaybookScreen from "../../../src/components/playbook/Screen.vue"

describe("PlaybookScreen", () => {
  it("has a header with the playbook title", async () => {
    render(PlaybookScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia()],
        stubs: ["Breadcrumb", "PlaybookSideMenu", "RouterLink"],
      },
    })

    await screen.findByText("test-playbook")
  })

  it("has a breadcrumb navigation", async () => {
    render(PlaybookScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia()],
        stubs: ["Inplace", "PlaybookSideMenu", "RouterLink"],
      },
    })

    await screen.findByText("test-playbook")
  })

  it("lists the playbook's modules", async () => {
    render(PlaybookScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia()],
        stubs: ["Breadcrumb", "Inplace", "PlaybookSideMenu", "RouterLink"],
      },
    })

    await screen.findByText("Module")
    await screen.findByText("test-module")
    await screen.findByText("1 Fragen")
  })
})
