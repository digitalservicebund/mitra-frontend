import { createTestingPinia } from "@pinia/testing"
import { render, screen } from "@testing-library/vue"
import PlaybookScreen from "../../../src/components/creator/PlaybookScreen.vue"

describe("PlaybookScreen", () => {
  it("contains a breadcrumb navigation", async () => {
    render(PlaybookScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia()],
        stubs: ["Inplace", "PlaybookSideMenu", "RouterLink"],
      },
    })

    await screen.findByText("test-playbook", { selector: "header nav *" })
  })
})
