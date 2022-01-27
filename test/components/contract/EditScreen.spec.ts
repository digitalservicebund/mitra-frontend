import { createTestingPinia } from "@pinia/testing"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/vue"
import PrimeVue from "primevue/config"
import EditScreen from "../../../src/components/contract/EditScreen.vue"
import ContractStorageService from "../../../src/domain/ContractStorageService"
import {
  makeContractRepository,
  makeContractStorageService,
} from "../../../src/provide"

describe("EditScreen", () => {
  it("has a header with the contract title", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia()],
        stubs: ["Breadcrumb", "EditStep", "RouterLink", "SideMenu"],
      },
    })

    await screen.findByText("Unbenannter Vertrag")
  })

  it("has a breadcrumb navigation", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [createTestingPinia()],
        stubs: ["EditStep", "Inplace", "RouterLink", "SideMenu"],
      },
    })

    await screen.findByText("Unbenannter Vertrag")
  })

  // TODO: also avoid stubbing components as much as possible!
  it("saves contract as work in progress when requested", async () => {
    const user = userEvent.setup()
    const pinia = createTestingPinia()
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [pinia, PrimeVue],
        stubs: ["Breadcrumb", "EditStep", "RouterLink"],
      },
    })

    await user.click(screen.getByText("Ändern"))
    await user.clear(screen.getByLabelText("Titel ändern"))
    await user.type(screen.getByLabelText("Titel ändern"), "Neuer Titel")
    await user.click(screen.getByText("Speichern"))

    // eslint-disable-next-line testing-library/await-async-query
    const contract = makeContractRepository().findById("xyz")
    expect(contract.title).toBe("Neuer Titel")

    const storage: ContractStorageService = makeContractStorageService()
    expect(storage.save).toHaveBeenNthCalledWith(1, contract)
  })
})
