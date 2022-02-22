import { createTestingPinia } from "@pinia/testing"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
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

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "",
        component: {},
      },
      {
        path: "/mitra-frontend/",
        component: {},
      },
      {
        path: "/mitra-frontend/:foo/:bar",
        component: {},
      },
    ],
  })

  beforeAll(async () => {
    session.rememberContract(
      new Contract(
        "test-contract",
        [new Module("test-module", [new TextAnswerStep("test-step")])],
        { id: "xyz" }
      )
    )

    router.push("/mitra-frontend/")
    await router.isReady()
  })

  it("has a header with the contract title", async () => {
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [pinia, router],
        stubs: ["Breadcrumb", "EditStep", "SideMenu"],
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
        plugins: [pinia, router],
        stubs: ["EditStep", "InplaceEditable", "SideMenu"],
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
        plugins: [pinia, router],
        stubs: ["Breadcrumb", "EditStep", "SideMenu"],
      },
    })

    await user.click(screen.getByText("Ändern"))
    await user.clear(screen.getByLabelText("Eigenschaft ändern"))
    await user.type(screen.getByLabelText("Eigenschaft ändern"), "Neuer Titel")
    await user.keyboard("{Enter}")

    expect(session.contracts["xyz"][0].title).toBe("Neuer Titel")
  })

  it("saves contract as work in progress when requested", async () => {
    const user = userEvent.setup()
    render(EditScreen, {
      props: {
        id: "xyz",
      },
      global: {
        plugins: [pinia, router],
        stubs: ["Breadcrumb", "EditStep", "InplaceEditable"],
      },
    })

    await user.click(screen.getByText("Speichern"))

    const storage: ContractStorageService = makeContractStorageService()
    expect(storage.save).toHaveBeenNthCalledWith(1, session.contracts["xyz"][0])
  })
})
