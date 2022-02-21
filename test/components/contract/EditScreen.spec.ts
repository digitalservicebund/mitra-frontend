import { createTestingPinia } from "@pinia/testing"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/vue"
import EditScreen from "../../../src/components/contract/EditScreen.vue"
import Contract from "../../../src/domain/Contract"
import ContractStorageService from "../../../src/domain/ContractStorageService"
import Module from "../../../src/domain/Module"
import { TextAnswerStep } from "../../../src/domain/Step"
import { makeContractStorageService } from "../../../src/provide"
import { useSession } from "../../../src/session"

describe("EditScreen", () => {
  const pinia = createTestingPinia()
  const session = useSession()

  beforeAll(() => {
    session.rememberContract(
      new Contract(
        "test-contract",
        [new Module("test-module", [new TextAnswerStep("test-step")])],
        { id: "xyz" }
      )
    )
  })

  it("has a header with the contract title", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [pinia],
        stubs: ["Breadcrumb", "EditStep", "RouterLink"],
      },
    })

    await screen.findByText("test-contract")
  })

  it("has a breadcrumb navigation", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [pinia],
        stubs: ["EditStep", "Inplace", "RouterLink"],
      },
    })

    await screen.findByText("test-contract")
  })

  it("maintains edited title in session", async () => {
    const user = userEvent.setup()
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [pinia],
        stubs: ["Breadcrumb", "EditStep", "RouterLink"],
      },
    })

    await user.click(screen.getByText("Ändern"))
    await user.clear(screen.getByLabelText("Eigenschaft ändern"))
    await user.type(screen.getByLabelText("Eigenschaft ändern"), "Neuer Titel")
    await user.click(screen.getByText("Speichern"))

    expect(session.contracts["xyz"][0].title).toBe("Neuer Titel")
  })

  it("saves contract as work in progress when requested", async () => {
    const user = userEvent.setup()
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [pinia],
        stubs: ["Breadcrumb", "EditStep", "RouterLink"],
      },
    })

    await user.click(screen.getByText("Speichern"))

    const storage: ContractStorageService = makeContractStorageService()
    expect(storage.save).toHaveBeenNthCalledWith(1, session.contracts["xyz"][0])
  })
})
