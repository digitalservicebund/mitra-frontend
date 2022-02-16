import { defineStore, PiniaPluginContext } from "pinia"
import { watch } from "vue"
import { Answer } from "./domain/Answer"
import Contract from "./domain/Contract"
import Metadata from "./domain/Metadata"
import Playbook from "./domain/Playbook"
import { Step } from "./domain/Step"
import { createContract, createPlaybook } from "./infra/JSONMapper"

type StepId = string
type Workspace = { contract?: Contract; playbook?: Playbook }
type ContractWorkspace = [Contract, Metadata, StepId]
type PlaybookWorkspace = [Playbook, Metadata]
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

const reviveDates: (metadata: { [property: string]: string }) => {
  [property: string]: Date
} = (metadata = {}) =>
  Object.entries(metadata).reduce(
    (memo: { [property: string]: Date }, entry) => {
      const [key, value] = entry
      memo[key] = new Date(value)
      return memo
    },
    {}
  )

export const persistence = ({ store }: PiniaPluginContext): void => {
  const key = store.$id
  const persisted: string | null = sessionStorage.getItem(key)
  if (persisted) {
    const { workspace, entryPoint } = JSON.parse(persisted)

    // Hydrating from serialized session after reload, we need to rectify the
    // instances we're getting out of sessionStorage (object -> Contract/Playbook)..
    if (workspace.contract) {
      const [contract, contractMetadata] = workspace.contract
      workspace.contract.splice(
        0,
        2,
        createContract({
          contract,
          ...reviveDates(contractMetadata),
        }),
        reviveDates(contractMetadata)
      )
    }
    if (workspace.playbook) {
      const [playbook, playbookMetadata] = workspace.playbook
      workspace.playbook.splice(
        0,
        2,
        createPlaybook({
          playbook,
          ...reviveDates(playbookMetadata),
        }),
        reviveDates(playbookMetadata)
      )
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
      contract: [
        new NullContract(),
        { createdAt: new Date(0) },
        "",
      ] as ContractWorkspace,
      playbook: [
        new NullPlaybook(),
        { createdAt: new Date(0) },
      ] as PlaybookWorkspace,
    },
    entryPoint: "",
  }),
  actions: {
    rememberContract(
      contract: Contract,
      lastEditedStep: Step<Answer> = contract.path[0]
    ) {
      this.workspace.contract = [contract, contract.metadata, lastEditedStep.id]
    },
    rememberPlaybook(playbook: Playbook) {
      this.workspace.playbook = [playbook, playbook.metadata]
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
      return this.workspace.contract[0] as Contract
    },
    playbook(): Playbook {
      return this.workspace.playbook[0] as Playbook
    },
    lastEditedStep(): Step<Answer> {
      return this.contract.path.find(
        (step) => step.id === this.workspace.contract[2]
      ) as Step<Answer>
    },
  },
})
