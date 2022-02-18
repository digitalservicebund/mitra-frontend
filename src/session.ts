import { defineStore, PiniaPluginContext } from "pinia"
import { watch } from "vue"
import { Answer } from "./domain/Answer"
import Contract from "./domain/Contract"
import Playbook from "./domain/Playbook"
import { Step } from "./domain/Step"
import { createContract, createPlaybook } from "./infra/JSONMapper"

type StepId = string
type Workspace = { contract?: Contract; playbook?: Playbook }
type ContractWorkspace = [Contract, StepId]
type PlaybookWorkspace = [Playbook]
type EntryPoint = "creator" | "einkauf"

class NullContract extends Contract {
  constructor() {
    super("", [])
  }
}
class NullPlaybook extends Playbook {
  constructor() {
    super()
  }
}

export const persistence = ({ store }: PiniaPluginContext): void => {
  const key = store.$id
  const persisted: string | null = sessionStorage.getItem(key)
  if (persisted) {
    // Hydrating from serialized session after reload, we need to rectify the
    // instances we're getting out of sessionStorage:
    // string -> Date
    // object -> Contract/Playbook
    const { workspace, entryPoint } = JSON.parse(persisted, (key, value) =>
      ["createdAt", "savedAt"].includes(key) ? new Date(value) : value
    )

    if (workspace.contract) {
      const [contractDTO] = workspace.contract
      workspace.contract[0] = createContract(contractDTO)
    }
    if (workspace.playbook) {
      const [playbookDTO] = workspace.playbook
      workspace.playbook[0] = createPlaybook(playbookDTO)
    }

    store.$patch({ workspace, entryPoint })
    sessionStorage.setItem(key, JSON.stringify(store.$state))
  }

  watch(
    () => store.$state,
    () => sessionStorage.setItem(key, JSON.stringify(store.$state)),
    { deep: true }
  )
}

export const useSession = defineStore("session", {
  state: () => ({
    workspace: {
      contract: [new NullContract(), ""] as ContractWorkspace,
      playbook: [new NullPlaybook()] as PlaybookWorkspace,
    },
    entryPoint: "",
  }),
  actions: {
    rememberContract(
      contract: Contract,
      lastEditedStep: Step<Answer> = contract.path[0]
    ) {
      this.workspace.contract = [contract, lastEditedStep.id]
    },
    rememberPlaybook(playbook: Playbook) {
      this.workspace.playbook = [playbook]
    },
    rememberEntryPoint(entryPoint: EntryPoint) {
      this.entryPoint = entryPoint
    },
    refresh({ contract, playbook }: Workspace) {
      if (contract !== undefined) {
        this.workspace.contract[0] = contract
      }
      if (playbook !== undefined) {
        this.workspace.playbook[0] = playbook
      }
    },
  },
  getters: {
    contract(): Contract {
      return this.workspace.contract[0]
    },
    playbook(): Playbook {
      return this.workspace.playbook[0]
    },
    lastEditedStep(): Step<Answer> {
      return this.contract.path.find(
        (step) => step.id === this.workspace.contract[1]
      ) as Step<Answer>
    },
  },
})
